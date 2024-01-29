import React from 'react';

const Temperature = ({ minTemperature, maxTemperature, targetTemperature }) => {
    const percentage = ((targetTemperature - minTemperature) / (maxTemperature - minTemperature)) * 100;

    const circleContainerStyle = {
        position: 'relative',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: '2px solid #000',
        backgroundColor: '#fff',
        margin: '20px',
        overflow: 'hidden',
    };

    const targetLineStyle = {
        position: 'absolute',
        top: '50%',
        left: 'calc(50% - 2.5px)',
        height: '50%',
        width: '2px',
        background: 'black',
        transform: `rotate(${percentage}deg)`,
        transformOrigin: 'top left'
    };

    const textDisplayStyle = {
        fontSize: '18px',
    };

    return (
        <div style={{ display: 'inline-block' }}>
            <div style={circleContainerStyle}>
                <div style={targetLineStyle}></div>
            </div>
            <div style={textDisplayStyle}>{targetTemperature}°C</div>
        </div>
    );
};

export default Temperature;
