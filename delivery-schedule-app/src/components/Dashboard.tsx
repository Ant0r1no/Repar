import React from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ user }) => {
    const history = useHistory();

    const handleLogout = () => {
        // Implement logout functionality
        history.push('/login');
    };

    return (
        <div className="dashboard">
            <h1>Bienvenido, {user.name}</h1>
            <div className="role-specific-content">
                {user.role === 'admin' && (
                    <div>
                        <h2>Panel de Administración</h2>
                        <button onClick={() => history.push('/admin')}>Gestionar Repartos</button>
                        <button onClick={() => history.push('/manage-users')}>Gestionar Usuarios</button>
                    </div>
                )}
                {user.role === 'user' && (
                    <div>
                        <h2>Mis Repartos</h2>
                        <button onClick={() => history.push('/user')}>Ver Mis Repartos</button>
                    </div>
                )}
                {user.role === 'visitor' && (
                    <div>
                        <h2>Bienvenido Visitante</h2>
                        <p>Por favor, inicie sesión para acceder a más funcionalidades.</p>
                    </div>
                )}
            </div>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default Dashboard;