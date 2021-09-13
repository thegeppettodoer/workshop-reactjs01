import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    {/* StrictMode es una herramienta para destacar problemas potenciales en la 
    // aplicación. Al igual que Fragment, StrictMode no renderiza nada en la 
    // interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes. */}


    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Web Vitals son tres indicadores con los que Google quiere clasificar la 
// experiencia de navegación que tiene un usuario cuando accede a una web. 
// Los tres factores -carga de página (LCP), interacción (FID) y estabilidad (CLS)- 
// servirán para que Google posicione mejor el contenido en sus resultados de búsqueda.19 nov. 2020
