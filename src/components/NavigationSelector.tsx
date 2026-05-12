import { NavLink } from 'react-router-dom';
import { LayoutTemplate, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './NavigationSelector.css';

const NavigationSelector = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="nav-selector-container">
      <div className="nav-selector-inner">
        <div className="nav-selector-header">
          <LayoutTemplate size={20} />
          <span>Opciones de Diseño</span>
        </div>
        <div className="nav-selector-links">
          <NavLink 
            to="/option-1" 
            className={({ isActive }) => `nav-selector-btn ${isActive ? 'active' : ''}`}
          >
            Opción 1: Minimalista
          </NavLink>
          <NavLink 
            to="/option-2" 
            className={({ isActive }) => `nav-selector-btn ${isActive ? 'active' : ''}`}
          >
            Opción 2: Cálida
          </NavLink>
          <NavLink 
            to="/option-3" 
            className={({ isActive }) => `nav-selector-btn ${isActive ? 'active' : ''}`}
          >
            Opción 3: Profesional
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationSelector;
