import React from 'react';
import { useHistory } from 'react-router-dom';

const Admin: React.FC = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Implement logout functionality
        history.push('/login');
    };

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
            <div className="user-management">
                <h2>User Management</h2>
                {/* Add user management functionality here */}
            </div>
            <div className="delivery-management">
                <h2>Delivery Management</h2>
                {/* Add delivery management functionality here */}
            </div>
        </div>
    );
};

export default Admin;