import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Shuffle.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface ShuffleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  shuffleDirection?: 'left' | 'right';
  duration?: number;
  maxDelay?: number;
  ease?: string | ((t: number) => number);
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onShuffleComplete?: () => void;
  shuffleTimes?: number;
  animationMode?: 'random' | 'evenodd';
  loop?: boolean;
  loopDelay?: number;
  stagger?: number;
  scrambleCharset?: string;
  colorFrom?: string;
  colorTo?: string;
  triggerOnce?: boolean;
  respectReducedMotion?: boolean;
  triggerOnHover?: boolean;
}

const Shuffle: React.FC<ShuffleProps> = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = '',
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true
}) => {
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const charsRef = useRef<HTMLElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playingRef = useRef(false);
  const hoverHandlerRef = useRef<((e: Event) => void) | null>(null);

  useEffect(() => {
    if ('fonts' in document) {
      if (document.fonts.status === 'loaded') setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  // Simple text splitter function to replace SplitText
  const splitTextToChars = (element: HTMLElement) => {
    const text = element.textContent || '';
    element.innerHTML = '';
    
    const chars: HTMLElement[] = [];
    for (let i = 0; i < text.length; i++) {
      const char = document.createElement('span');
      char.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      char.className = 'shuffle-char';
      char.style.display = 'inline-block';
      char.style.opacity = '0';
      char.style.transform = shuffleDirection === 'right' ? 'translateX(-20px)' : 'translateX(20px)';
      element.appendChild(char);
      chars.push(char);
    }
    
    return chars;
  };

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (ref.current) {
          gsap.set(ref.current, { opacity: 1 });
        }
        onShuffleComplete?.();
        return;
      }

      const el = ref.current as HTMLElement;

      const startPct = (1 - threshold) * 100;
      const mm = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
      const mv = mm ? parseFloat(mm[1]) : 0;
      const mu = mm ? mm[2] || 'px' : 'px';
      const sign = mv === 0 ? '' : mv < 0 ? `-=${Math.abs(mv)}${mu}` : `+=${mv}${mu}`;
      const start = `top ${startPct}%${sign}`;

      const removeHover = () => {
        if (hoverHandlerRef.current && ref.current) {
          ref.current.removeEventListener('mouseenter', hoverHandlerRef.current);
          hoverHandlerRef.current = null;
        }
      };

      const teardown = () => {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        charsRef.current = [];
        playingRef.current = false;
      };

      const scrambleChar = (char: HTMLElement, charset: string) => {
        if (!charset) return;
        const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
        char.textContent = randomChar;
      };

      const build = () => {
        teardown();
        
        // Split text into characters
        charsRef.current = splitTextToChars(el);
        
        // Apply initial styles
        gsap.set(charsRef.current, {
          opacity: 0,
          x: shuffleDirection === 'right' ? -20 : 20,
          color: colorFrom || 'inherit'
        });
      };

      const play = () => {
        const chars = charsRef.current;
        if (!chars.length) return;

        playingRef.current = true;

        const tl = gsap.timeline({
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              if (colorTo) gsap.set(chars, { color: colorTo });
              onShuffleComplete?.();
              armHover();
            }
          }
        });

        // Scramble effect
        if (scrambleCharset) {
          for (let i = 0; i < shuffleTimes; i++) {
            tl.call(() => {
              chars.forEach(char => scrambleChar(char, scrambleCharset));
            }, [], i * 0.1);
          }
        }

        // Main animation
        if (animationMode === 'evenodd') {
          const odd = chars.filter((_, i) => i % 2 === 1);
          const even = chars.filter((_, i) => i % 2 === 0);
          
          if (odd.length) {
            tl.to(odd, {
              opacity: 1,
              x: 0,
              duration,
              ease,
              stagger: stagger
            }, 0);
          }
          
          if (even.length) {
            tl.to(even, {
              opacity: 1,
              x: 0,
              duration,
              ease,
              stagger: stagger
            }, duration * 0.3);
          }
        } else {
          tl.to(chars, {
            opacity: 1,
            x: 0,
            duration,
            ease,
            stagger: {
              amount: maxDelay,
              from: 'random'
            }
          }, 0);
        }

        if (colorFrom && colorTo) {
          tl.to(chars, { color: colorTo, duration, ease }, 0);
        }

        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        removeHover();
        const handler = () => {
          if (playingRef.current) return;
          build();
          play();
        };
        hoverHandlerRef.current = handler;
        ref.current.addEventListener('mouseenter', handler);
      };

      const create = () => {
        build();
        play();
        armHover();
        setReady(true);
      };

      // For preloader context, start immediately without scroll trigger
      if (threshold === 0 && triggerOnce) {
        // Start animation immediately for preloader
        setTimeout(create, 100);
        return () => {
          removeHover();
          teardown();
          setReady(false);
        };
      }

      const st = ScrollTrigger.create({
        trigger: el,
        start,
        once: triggerOnce,
        onEnter: create
      });

      return () => {
        st.kill();
        removeHover();
        teardown();
        setReady(false);
      };
    },
    {
      dependencies: [
        text,
        duration,
        maxDelay,
        ease,
        threshold,
        rootMargin,
        fontsLoaded,
        shuffleDirection,
        shuffleTimes,
        animationMode,
        loop,
        loopDelay,
        stagger,
        scrambleCharset,
        colorFrom,
        colorTo,
        triggerOnce,
        respectReducedMotion,
        triggerOnHover
      ],
      scope: ref
    }
  );

  const commonStyle: React.CSSProperties = { textAlign, ...style };
  const classes = `shuffle-parent ${ready ? 'is-ready' : ''} ${className}`;
  const TagName = tag || 'p';
  
  const props = {
    ref: ref as React.Ref<HTMLElement>,
    className: classes,
    style: commonStyle,
    children: text
  };
  
  return React.createElement(TagName, props);
};

export default Shuffle;