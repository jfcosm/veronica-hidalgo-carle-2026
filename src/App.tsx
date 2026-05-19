import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Option2 from './pages/Option2';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Option2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
