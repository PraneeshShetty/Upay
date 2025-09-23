// PWA utilities for service worker registration and app installation

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface PWAInstallPrompt {
  event: BeforeInstallPromptEvent | null;
  isInstallable: boolean;
  isInstalled: boolean;
}

class PWAManager {
  private installPrompt: PWAInstallPrompt = {
    event: null,
    isInstallable: false,
    isInstalled: false
  };

  private installCallbacks: ((canInstall: boolean) => void)[] = [];
  private updateCallbacks: (() => void)[] = [];

  constructor() {
    this.init();
  }

  private init() {
    // Check if app is already installed
    this.checkIfInstalled();

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      const installEvent = e as BeforeInstallPromptEvent;
      
      this.installPrompt.event = installEvent;
      this.installPrompt.isInstallable = true;
      
      console.log('PWA: Install prompt available');
      this.notifyInstallCallbacks(true);
    });

    // Listen for appinstalled event
    window.addEventListener('appinstalled', () => {
      console.log('PWA: App installed successfully');
      this.installPrompt.isInstalled = true;
      this.installPrompt.isInstallable = false;
      this.installPrompt.event = null;
      
      this.notifyInstallCallbacks(false);
    });

    // Register service worker
    this.registerServiceWorker();
  }

  private checkIfInstalled(): boolean {
    // Check if running in standalone mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isNavigatorStandalone = (window.navigator as any).standalone === true;
    
    this.installPrompt.isInstalled = isStandalone || isNavigatorStandalone;
    return this.installPrompt.isInstalled;
  }

  private async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        console.log('PWA: Registering service worker...');
        
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });

        console.log('PWA: Service worker registered successfully', registration);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          console.log('PWA: New service worker version found');
          
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('PWA: New content available');
                this.notifyUpdateCallbacks();
              }
            });
          }
        });

        // Listen for controller changes (new SW activated)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log('PWA: New service worker activated');
          window.location.reload();
        });

      } catch (error) {
        console.error('PWA: Service worker registration failed:', error);
      }
    } else {
      console.warn('PWA: Service workers not supported');
    }
  }

  public async installApp(): Promise<boolean> {
    if (!this.installPrompt.event) {
      console.warn('PWA: Install prompt not available');
      return false;
    }

    try {
      console.log('PWA: Showing install prompt');
      await this.installPrompt.event.prompt();
      
      const choiceResult = await this.installPrompt.event.userChoice;
      console.log('PWA: User choice:', choiceResult.outcome);
      
      if (choiceResult.outcome === 'accepted') {
        this.installPrompt.isInstallable = false;
        this.installPrompt.event = null;
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('PWA: Install prompt failed:', error);
      return false;
    }
  }

  public canInstall(): boolean {
    return this.installPrompt.isInstallable && !this.installPrompt.isInstalled;
  }

  public isInstalled(): boolean {
    return this.installPrompt.isInstalled;
  }

  public onInstallable(callback: (canInstall: boolean) => void) {
    this.installCallbacks.push(callback);
    // Call immediately with current state
    callback(this.canInstall());
  }

  public onUpdate(callback: () => void) {
    this.updateCallbacks.push(callback);
  }

  private notifyInstallCallbacks(canInstall: boolean) {
    this.installCallbacks.forEach(callback => callback(canInstall));
  }

  private notifyUpdateCallbacks() {
    this.updateCallbacks.forEach(callback => callback());
  }

  public async updateServiceWorker() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration && registration.waiting) {
        // Tell the waiting SW to skip waiting
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    }
  }

  public getInstallPlatforms(): string[] {
    return this.installPrompt.event?.platforms || [];
  }

  public isOffline(): boolean {
    return !navigator.onLine;
  }

  public onNetworkChange(callback: (isOnline: boolean) => void) {
    window.addEventListener('online', () => {
      console.log('PWA: Network online');
      callback(true);
    });
    
    window.addEventListener('offline', () => {
      console.log('PWA: Network offline');
      callback(false);
    });
  }

  public async requestPersistentStorage(): Promise<boolean> {
    if ('storage' in navigator && 'persist' in navigator.storage) {
      try {
        const isPersistent = await navigator.storage.persist();
        console.log('PWA: Persistent storage:', isPersistent);
        return isPersistent;
      } catch (error) {
        console.error('PWA: Persistent storage request failed:', error);
        return false;
      }
    }
    return false;
  }

  public async getStorageEstimate() {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      try {
        const estimate = await navigator.storage.estimate();
        console.log('PWA: Storage estimate:', estimate);
        return estimate;
      } catch (error) {
        console.error('PWA: Storage estimate failed:', error);
        return null;
      }
    }
    return null;
  }
}

// Create singleton instance
export const pwaManager = new PWAManager();

// Utility functions for React components
export const usePWA = () => {
  return {
    install: () => pwaManager.installApp(),
    canInstall: () => pwaManager.canInstall(),
    isInstalled: () => pwaManager.isInstalled(),
    isOffline: () => pwaManager.isOffline(),
    onInstallable: (callback: (canInstall: boolean) => void) => pwaManager.onInstallable(callback),
    onUpdate: (callback: () => void) => pwaManager.onUpdate(callback),
    onNetworkChange: (callback: (isOnline: boolean) => void) => pwaManager.onNetworkChange(callback),
    updateApp: () => pwaManager.updateServiceWorker(),
    requestPersistentStorage: () => pwaManager.requestPersistentStorage(),
    getStorageEstimate: () => pwaManager.getStorageEstimate()
  };
};

export default pwaManager;