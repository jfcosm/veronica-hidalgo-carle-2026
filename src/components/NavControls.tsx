
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './NavControls.css';

const NavControls = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="nav-controls">
      <button 
        className="nav-control-btn" 
        onClick={toggleLanguage} 
        aria-label="Toggle language"
        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <Globe size={18} />
        <span>{language.toUpperCase()}</span>
      </button>
      <div className="nav-control-divider"></div>
      <button 
        className="nav-control-btn" 
        onClick={toggleTheme} 
        aria-label="Toggle theme"
        title="Toggle dark/light mode"
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </div>
  );
};

export default NavControls;
