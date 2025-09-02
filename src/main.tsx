import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Renderiza o React App dentro de um div com fundo fixo
createRoot(document.getElementById("root")!).render(
  <div className="min-h-screen bg-[url('/imagens/fundo.jpg')] bg-cover bg-center bg-fixed">
    <App />
  </div>
);
