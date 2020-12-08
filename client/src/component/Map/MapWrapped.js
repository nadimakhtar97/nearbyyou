import React from 'react';
import WrappedMap from './Map'

const MapWrapped = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBYAyWmzwqFn2kE11uQQDNTXa3yJv9hCoo`}
                loadingElement={<div style={{ height: `80%` }} />}
                containerElement={<div style={{ height: `80%` }} />}
                mapElement={<div style={{ height: `80%` }} />}
            />
        </div>
    );
};

export default MapWrapped;
