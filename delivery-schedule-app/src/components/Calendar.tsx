import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
    const [deliveries, setDeliveries] = useState(Array(12).fill(''));

    const handleInputChange = (index: number, value: string) => {
        const newDeliveries = [...deliveries];
        newDeliveries[index] = value;
        setDeliveries(newDeliveries);
    };

    return (
        <div className="calendar-container">
            <h2>Calendario de Repartos</h2>
            <div className="calendar">
                {deliveries.map((delivery, index) => (
                    <div key={index} className="delivery-slot">
                        <input
                            type="text"
                            value={delivery}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            placeholder={`Reparto ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;