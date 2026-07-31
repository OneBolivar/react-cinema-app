import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {

  const navigate = useNavigate();

  // Estados del formulario y de la interfaz
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Manejador del envío del formulario
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      // register user logic 
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Ocurrió un error inesperado');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Registrarse
        </h2>

        {/* Mensaje de error general */}
        {errorMessage && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg mb-4 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* name field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              required
              placeholder="Tu nombre"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-white"
            />
          </div>

          {/* lastname field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Apellido
            </label>
            <input
              type="text"
              required
              placeholder="Tu apellido"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-white"
            />
          </div>

          {/* document number field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Numero de documento
            </label>
            <input
              type="text"
              required
              placeholder="Tu numero de documento"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-white"
            />
          </div>

          {/* document type field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Tipo de documento
            </label>
            <select required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-white">
              <option>tipo de documento</option>
              <option value="">Cedula de ciudadania</option>
              <option value="">tipo de documento</option>
            </select>
          </div>

          {/* email field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-white"
            />
          </div>

          {/* birthday field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Fecha de nacimento
            </label>
            <input
              type="date"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-white"
            />
          </div>

          {/* Campo Contraseña con Toggle Mostrar/Ocultar */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-white pr-16"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-white"
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>


          {/* Botón de Submit con Estado de Carga */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 flex justify-center items-center"
          >
            {isLoading ? (
              <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/auth" className="text-red-400 hover:underline">
            Inicia sesión
          </Link>
        </p>

      </div>
    </div>

  )
}
