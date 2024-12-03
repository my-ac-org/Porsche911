import React from 'react';

export function Overlay() {
    const date = new Date();

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses van de 0 a 11
        const year = date.getFullYear();
        return `${day} / ${month} / ${year}`;
    };

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>— Porsche 911 —</div>
            <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>{formatDate(date)}</div>
        </div>
    )
}