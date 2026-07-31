import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Reemplaza por tu función del servicio authService si aplica
// import { registerUser } from '../services/authService';

interface RegisterFormData {
  nombre: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: string;
  genero: string;
  email: string;
  confirmEmail: string;
  celular: string;
  password: string;
  confirmPassword: string;
  ciudadPrincipal: string;
  complejoFavorito: string;
  tratamientoDatos: boolean;
  terminosCondiciones: boolean;
}

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    nombre: '',
    apellidos: '',
    tipoDocumento: 'CC',
    numeroDocumento: '',
    fechaNacimiento: '',
    genero: '',
    email: '',
    confirmEmail: '',
    celular: '',
    password: '',
    confirmPassword: '',
    ciudadPrincipal: '',
    complejoFavorito: '',
    tratamientoDatos: false,
    terminosCondiciones: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validaciones
    if (formData.email !== formData.confirmEmail) {
      setErrorMessage('Los correos electrónicos no coinciden.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    if (!formData.tratamientoDatos || !formData.terminosCondiciones) {
      setErrorMessage(
        'Debes aceptar el Tratamiento de Datos y los Términos y Condiciones.'
      );
      return;
    }

    setIsLoading(true);

    try {
      // Llamada a tu API/servicio
      // await registerUser(formData);
      console.log('Datos enviados:', formData);

      // Redirigir al login o al home tras el registro exitoso
      navigate('/login');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Ocurrió un error inesperado al registrarte.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0e1b] text-white px-4 py-10 font-sans">
      {/* Brand Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-wider text-[#d0beff] uppercase">
          CINEPLEX
        </h1>
        <p className="text-xs md:text-sm tracking-widest text-gray-400 mt-1 uppercase">
          EXPERIENCE THE EXTRAORDINARY
        </p>
      </div>

      {/* Card Container */}
      <div className="max-w-2xl w-full bg-[#131728] p-6 md:p-10 rounded-2xl shadow-2xl border border-[#232942]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Crear Cuenta</h2>
          <p className="text-gray-400 text-sm mt-1">
            Únete a nuestra comunidad de cinéfilos
          </p>
        </div>

        {/* Mensaje de error */}
        {errorMessage && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg mb-6 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Secciones: Información Personal */}
          <div>
            <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">
              Información Personal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Apellidos *
                </label>
                <input
                  type="text"
                  name="apellidos"
                  required
                  placeholder="Tus apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Tipo de Documento *
                </label>
                <select
                  name="tipoDocumento"
                  required
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                >
                  <option value="CC">Cédula de Ciudadanía (CC)</option>
                  <option value="CE">Cédula de Extranjería (CE)</option>
                  <option value="PAS">Pasaporte</option>
                  <option value="TI">Tarjeta de Identidad (TI)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Número de Documento *
                </label>
                <input
                  type="text"
                  name="numeroDocumento"
                  required
                  placeholder="123456789"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Fecha de Nacimiento *
                </label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  required
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Género <span className="text-gray-400">(Opcional)</span>
                </label>
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                >
                  <option value="">Seleccionar</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro / Prefiero no decir</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sección: Contacto */}
          <div>
            <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">
              Contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ejemplo@cineplex.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Confirmar Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="confirmEmail"
                  required
                  placeholder="ejemplo@cineplex.com"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Celular *
                </label>
                <input
                  type="tel"
                  name="celular"
                  required
                  placeholder="300 000 0000"
                  value={formData.celular}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Sección: Seguridad */}
          <div>
            <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">
              Seguridad
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Contraseña *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm pr-16"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-600 hover:text-gray-900"
                  >
                    {showPassword ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Confirmar Contraseña *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    required
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm pr-16"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-600 hover:text-gray-900"
                  >
                    {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección: Preferencias */}
          <div>
            <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">
              Preferencias
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Ciudad Principal *
                </label>
                <select
                  name="ciudadPrincipal"
                  required
                  value={formData.ciudadPrincipal}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                >
                  <option value="">Selecciona tu ciudad</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Cali">Cali</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Complejo Favorito <span className="text-gray-400">(Opcional)</span>
                </label>
                <select
                  name="complejoFavorito"
                  value={formData.complejoFavorito}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                >
                  <option value="">Selecciona un complejo</option>
                  <option value="Cineplex Centro">Cineplex Centro</option>
                  <option value="Cineplex Norte">Cineplex Norte</option>
                  <option value="Cineplex Mall Sur">Cineplex Mall Sur</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sección: Consentimientos */}
          <div className="space-y-3 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="tratamientoDatos"
                checked={formData.tratamientoDatos}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded accent-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500"
              />
              <span className="text-xs text-gray-300 leading-relaxed">
                Acepto el{' '}
                <a href="/politica-datos" className="text-purple-400 underline hover:text-purple-300">
                  Tratamiento de Datos Personales
                </a>.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="terminosCondiciones"
                checked={formData.terminosCondiciones}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded accent-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500"
              />
              <span className="text-xs text-gray-300 leading-relaxed">
                Acepto los{' '}
                <a href="/terminos" className="text-purple-400 underline hover:text-purple-300">
                  Términos y Condiciones del Servicio
                </a>.
              </span>
            </label>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-[#6d3aff] hover:bg-[#5b2ee0] text-white font-bold rounded-xl shadow-lg shadow-purple-900/40 transition-all transform active:scale-[0.99] disabled:opacity-50 flex justify-center items-center text-sm tracking-wider uppercase mt-4"
          >
            {isLoading ? (
              <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : (
              'REGISTRARSE'
            )}
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-purple-400 hover:underline font-semibold">
            Iniciar Sesión
          </a>
        </p>
      </div>
    </div>
  );
};