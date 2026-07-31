import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './features/auth/pages/LoginPage';
import { RegisterPage } from './features/auth/pages/RegisterPage';
import { LocationPage } from "./features/auth/pages/LocationPage"
// Configuración de las rutas de la aplicación
export const appRouter = createBrowserRouter([
  {
    path: '/auth',
    children: [
      {
        index: true,
        element: <LoginPage/>
      },
      {
        path:'register',
        element: <RegisterPage/>
      }
    ],
  },
  {
    path: '/location',
    element: <LocationPage/>
  }
])


