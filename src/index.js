//es el primer archivo que se va a cargar
//Aquí importamos react y el archivo de App.jsx - además de los estilos del index.css
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


