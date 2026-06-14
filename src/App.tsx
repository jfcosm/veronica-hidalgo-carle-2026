import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Option2 from './pages/Option2';
import Detail from './pages/Detail';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    // If we navigate to a hash on the home page from another page, scroll to it
    if (location.pathname === '/' && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Option2 />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
