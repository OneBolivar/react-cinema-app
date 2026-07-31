import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';

// Componente principal envuelto en el enrutador
export const App = () => {
  return (
      <RouterProvider router={appRouter} />
  );
};

export default App;