import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido a la Aplicación de Repartos a Domicilio</h1>
            <p>Esta aplicación te permite anotar y gestionar repartos a domicilio de manera sencilla y eficiente.</p>
            <div className="button-container">
                <Link to="/login" className="button">Iniciar Sesión</Link>
                <Link to="/about" className="button">Acerca de</Link>
            </div>
        </div>
    );
};

export default Home;