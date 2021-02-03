import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoicGVkcm9jb2xsb2dubyIsImEiOiJja2twYXVrZmcwODFoMm5xbjh6M2luYnJxIn0.1gbCKNBYADW0rNztKYduwA",
});

class Map extends React.Component {
    render() {
        return (
            <Mapbox
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Mapbox>
        );
    }
}

export default Map;