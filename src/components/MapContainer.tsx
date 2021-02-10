import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./MapContainer.css";

import { PARIS, PARIS_2, MAP_CENTER } from "../utils/constants";
import { getParkingSpots } from "../services/paris-requests";
import { RecordData } from "../utils/interfaces";

const testMarkers = [
	{ lng: PARIS[0], lat: PARIS[1] },
	{ lng: PARIS_2[0], lat: PARIS_2[1] },
];

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

function MapContainer() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: API_KEY,
	});

	const [map, setMap] = useState(null);

	const [markers, setMarkers] = useState(testMarkers);
	let apiCallSucceeded = false;

	useEffect(() => {
		getParkingSpots()
			.then((data) => {
				const markerInfo: Array<RecordData> = data.records;
				const coordinates = markerInfo
					.map((markerInfo) => markerInfo.geometry.coordinates)
					.map((coords) => {
						return { lat: coords[1], lng: coords[0] };
					});
				setMarkers(coordinates);
				apiCallSucceeded = true;
			})
			.catch((error: AxiosError) => console.log(error));
	});

	const onLoad = React.useCallback(function centerMap(map) {}, []);

	const onUnmount = React.useCallback(function (map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<div>
			<GoogleMap
				mapContainerClassName="map-container"
				center={MAP_CENTER}
				zoom={12}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{markers.map((marker, markerID) => (
					<Marker position={marker} key={markerID} />
				))}
			</GoogleMap>
			{!apiCallSucceeded && <p>Waiting for Paris API...</p>}
		</div>
	) : (
		<p>Failed to connect to Google Maps API</p>
	);
}

export default React.memo(MapContainer);
