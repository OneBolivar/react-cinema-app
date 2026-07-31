import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './appRouter';

// Componente principal envuelto en el enrutador
export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;