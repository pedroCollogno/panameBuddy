import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./MapContainer.css";

import { PARIS, PARIS_2, MAP_CENTER } from "../utils/constants";
import { getParkingSpots } from "../services/paris-requests";
import { RecordData, FavoriteStation } from "../utils/interfaces";

const testMarkers = {
	"1": { lng: PARIS[0], lat: PARIS[1] },
	"2": { lng: PARIS_2[0], lat: PARIS_2[1] },
};

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
export interface Props {
	favoriteStations: Array<FavoriteStation>;
	rateStation: Function;
}

function MapContainer({ favoriteStations, rateStation }: Props) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: API_KEY,
	});

	const [map, setMap] = useState(null);

	const [markers, setMarkers] = useState({ ...testMarkers });
	let apiCallSucceeded = false;

	useEffect(() => {
		getParkingSpots()
			.then((data) => {
				const markerInfos: Array<RecordData> = data.records || [];
				let coordinates = markerInfos.map(({ recordid, geometry }) => {
					return [
						recordid,
						{
							lat: geometry.coordinates[1],
							lng: geometry.coordinates[0],
						},
					];
				});
				coordinates = Object.fromEntries(coordinates);
				setMarkers(coordinates);
				apiCallSucceeded = true;
			})
			.catch((error: AxiosError) => console.log(error));
	});

	const onLoad = React.useCallback(function centerMap(map) {}, []);

	const onUnmount = React.useCallback(function (map) {
		setMap(null);
	}, []);

	const onClick = (markerID: string) => {
		console.log(markerID);
	};

	return isLoaded ? (
		<div>
			<GoogleMap
				mapContainerClassName="map-container"
				center={MAP_CENTER}
				zoom={12}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{Object.entries(markers).map(([markerID, marker]) => (
					<Marker
						position={marker}
						key={markerID}
						onClick={() => onClick(markerID)}
					/>
				))}
			</GoogleMap>
			{!apiCallSucceeded && <p>Waiting for Paris API...</p>}
		</div>
	) : (
		<p>Failed to connect to Google Maps API</p>
	);
}

export default React.memo(MapContainer);
