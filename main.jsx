// REACT
import React from 'react';
import ReactDOM from 'react-dom/client'

// ESTILOS
import './src/index.css';
import './src/App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// COMPONENTES
import App from './src/App';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
