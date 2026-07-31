import type { AuthResponse, LoginCredentials } from '../interfaces/auth.interfaces';

// Configuración de la URL base para el backend
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

// Servicio para autenticar al usuario contra la API backend
export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  // Validación de respuesta del servidor
  if (!response.ok) {
    throw new Error(data.message || 'Error al iniciar sesión');
  }

  return data;
};