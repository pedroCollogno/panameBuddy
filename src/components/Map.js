import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { getParkingSpots } from "../services/paris-requests";

const Mapbox = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoicGVkcm9jb2xsb2dubyIsImEiOiJja2twYXVrZmcwODFoMm5xbjh6M2luYnJxIn0.1gbCKNBYADW0rNztKYduwA",
});
class Map extends React.Component {
    constructor(props) {
        super(props);

        let parkingSpotCoords = [];

        getParkingSpots().then((response) => {
            if(response.data) {
                const records = response.data.records;
                for(let record of records) {
                    parkingSpotCoords.push(record.geometry.coordinates);
                }
            }
            
        }).catch((error) => {
            console.log(error.message);
        });

        this.state = {
            markers: parkingSpotCoords
        }
    }

    render() {
        console.log(this.state.markers);
        return (
            <Mapbox
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "100vh",
                    width: "100vw",
                }}
                center={[2.379853400000002, 48.8648482]}
            >
                <Layer type="circle" id="markers" key="markers" paint={{
                                                "circle-color": "green",
                                                "circle-radius": 3,
                                            }}>
                    {this.state.markers.map((marker, markerIndex) =>
                        <Feature coordinates={marker} key={markerIndex} />
                    )}
                </Layer>
            </Mapbox>
        );
    }
}

export default Map;