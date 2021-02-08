import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "800px",
    height: "800px",
};

const PARIS = [2.379853400000002, 48.8648482];
const PARIS_2 = [2.29, 48.8648482];

const MAP_CENTER = {
    lat: 48.8648482,
    lng: 2.339853400000002,
};

const markers = [
    { lng: PARIS[0], lat: PARIS[1] },
    { lng: PARIS_2[0], lat: PARIS_2[1] },
];

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

function MapContainer() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: API_KEY,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function centerMap(map) {
    }, []);

    const onUnmount = React.useCallback(function (map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={MAP_CENTER}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {markers.map((marker, markerID) => (
                <Marker position={marker} key={markerID} />
            ))}
        </GoogleMap>
    ) : (
        <p>Failed to connect to Google Maps API</p>
    );
}

export default React.memo(MapContainer);
