// Lo que enviamos al formulario
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Lo que nos responde el servidor cuando el inicio de sesión es exitoso
export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}