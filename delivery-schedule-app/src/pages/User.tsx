import React from 'react';
import Calendar from '../components/Calendar';

const User: React.FC = () => {
    return (
        <div className="user-page">
            <h1>Mis Repartos</h1>
            <p>Aquí puedes ver y gestionar tus repartos programados.</p>
            <Calendar />
        </div>
    );
};

export default User;