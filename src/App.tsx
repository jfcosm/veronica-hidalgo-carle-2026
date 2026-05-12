import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavigationSelector from './components/NavigationSelector';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Option1 from './pages/Option1';
import Option2 from './pages/Option2';
import Option3 from './pages/Option3';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/option-1" replace />} />
        <Route path="/option-1" element={<Option1 />} />
        <Route path="/option-2" element={<Option2 />} />
        <Route path="/option-3" element={<Option3 />} />
      </Routes>
      <NavigationSelector />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
