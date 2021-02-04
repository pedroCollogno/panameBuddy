import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

require("dotenv").config();

const containerStyle = {
    width: "800px",
    height: "800px",
};

const PARIS = [2.379853400000002, 48.8648482];
const PARIS_2 = [2.5, 48.8648482];

const center = {
    lat: 48.8648482,
    lng: 2.379853400000002,
};

const markers = [
    { lng: PARIS[0], lat: PARIS[1] },
    { lng: PARIS_2[0], lat: PARIS_2[1] },
];

function MapContainer() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            defaultCenter={center}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {markers.map((marker, markerID) => (
                <Marker position={marker} key={markerID} />
            ))}
            <></>
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(MapContainer);
