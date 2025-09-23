import { languages } from '../utils/translations';

const LanguageDebugger = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 10, 
      left: 10, 
      background: 'red', 
      color: 'white', 
      padding: '10px', 
      zIndex: 9999,
      fontSize: '12px',
      border: '2px solid yellow',
      maxWidth: '300px'
    }}>
      <h3>🔍 Debug: Languages ({Object.keys(languages).length})</h3>
      <div style={{ maxHeight: '200px', overflow: 'auto' }}>
        {Object.entries(languages).map(([code, lang]) => (
          <div key={code} style={{ 
            color: code === 'kn' ? 'yellow' : 'white',
            fontWeight: code === 'kn' ? 'bold' : 'normal'
          }}>
            {code}: {lang.name} {lang.flag}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '5px', fontSize: '10px' }}>
        Cache: {Date.now()}
      </div>
    </div>
  );
};

export default LanguageDebugger;