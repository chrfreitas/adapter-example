import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
rootElement.classList.add('w-full', 'h-full');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
