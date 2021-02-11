import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./MapContainer.css";

import { PARIS, PARIS_2, MAP_CENTER } from "../utils/constants";
import { getParkingSpots } from "../services/paris-requests";
import { RecordData, FavoriteStation, MarkerData } from "../utils/interfaces";

const testMarkers = [
	{ lng: PARIS[0], lat: PARIS[1], recordid: 1 },
	{ lng: PARIS_2[0], lat: PARIS_2[1], recordid: 2 },
];

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
export interface Props {
	favoriteStations?: Array<FavoriteStation>;
	rateStation?: Function;
}

function MapContainer({ favoriteStations, rateStation }: Props) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: API_KEY,
	});

	const [map, setMap] = useState(null);

	const [markers, setMarkers] = useState(testMarkers);
	const [markerText, setMarkerText] = useState("TEST MARKER");
	let apiCallSucceeded = false;

	const getData = async () => {
		const data = await getParkingSpots();
		return data;
	};

	useEffect(() => {
		getData()
			.then((data) => {
				if (!data) {
					return false;
				}
				const markerInfos: Array<RecordData> = data.records || [];
				const coordinates = markerInfos.map(
					({ recordid, geometry }) => {
						return {
							lat: geometry.coordinates[1],
							lng: geometry.coordinates[0],
							recordid: recordid,
						};
					}
				);
				setMarkers(coordinates);
				setMarkerText("TRUE MARKER");
				apiCallSucceeded = true;
			})
			.catch((error: AxiosError) => console.log(error));
	});

	const onLoad = React.useCallback(function centerMap(map) {}, []);

	const onUnmount = React.useCallback(function (map) {
		setMap(null);
	}, []);

	const onClick = (marker: MarkerData) => {
		console.log(marker.recordid);
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
				{markers.map((marker) => (
					<Marker
						position={{ lat: marker.lat, lng: marker.lng }}
						key={marker.recordid}
						onClick={() => onClick(marker)}
					/>
				))}
			</GoogleMap>
			{!apiCallSucceeded && <p>Waiting for Paris API...</p>}
			{markers.map((marker) => (
				<p key={marker.recordid}>{markerText}</p>
			))}
		</div>
	) : (
		<div>
			<p>Failed to connect to Google Maps API</p>
			{markers.map((marker) => (
				<p key={marker.recordid}>{markerText}</p>
			))}
		</div>
	);
}

export default React.memo(MapContainer);
