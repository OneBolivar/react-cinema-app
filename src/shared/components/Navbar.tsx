import { Link, useNavigate } from 'react-router-dom';

// Componente de navegación principal reutilizable en todas las pantallas
export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#0D0E1A]/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      {/* 1. Logotipo de CINEPLEX */}
      <div 
        onClick={() => navigate('/')} 
        className="cursor-pointer flex items-center gap-2"
      >
        <span className="text-2xl font-black tracking-widest bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          CINEPLEX
        </span>
      </div>

      {/* 2. Enlaces de navegación entre secciones */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link to="/" className="hover:text-purple-400 transition-colors">Movies</Link>
        <Link to="/cinemas" className="hover:text-purple-400 transition-colors">Cinemas</Link>
        <Link to="/food" className="hover:text-purple-400 transition-colors">Food & Snacks</Link>
      </nav>

      {/* 3. Acciones del usuario (Buscar y Login) */}
      <div className="flex items-center gap-4">
        <Link 
          to="/login" 
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          Inicia Sesión
        </Link>
      </div>
    </header>
  );
};