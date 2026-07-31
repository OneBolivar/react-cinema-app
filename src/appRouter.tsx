import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/pages/LoginPage';

// Configuración de las rutas de la aplicación
export const AppRouter = () => {
  return (
    <Routes>
      {/* Ruta para el login */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Ruta por defecto o de inicio */}
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};


