import React from 'react';

const EarthquakeInfo = ({ location, magnitude, depth, maxIntensity, time, coordinates }) => {
    return (
        <div>
            <h2>Earthquake Details</h2>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Magnitude:</strong> {magnitude}</p>
            <p><strong>Depth:</strong> {depth} km</p>
            <p><strong>Max Intensity:</strong> {maxIntensity}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Coordinates:</strong> {coordinates.lat}, {coordinates.lng}</p>
        </div>
    );
};

export default EarthquakeInfo;