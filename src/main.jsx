import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
rootElement.classList.add('w-full', 'h-full', 'min-h-screen', 'min-w-full', 'h-[100vh]', 'w-[100vw]', 'bg-off-white');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
