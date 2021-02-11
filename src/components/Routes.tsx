import { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Favorites from "./Favorites";
import MapContainer from "./MapContainer";
import Navbar from "./Navbar";

import { FavoriteStation } from "../utils/interfaces";

function Routes() {
	const [favoriteStations, setFavoriteStations] = useState(
		new Array<FavoriteStation>()
	);

	function rateStation(station: FavoriteStation, newRating: number) {
		let stationIndex = -1;
		for (const favoriteStation of favoriteStations) {
			if (station.name === favoriteStation.name) {
				stationIndex = favoriteStations.indexOf(favoriteStation);
				break;
			}
		}
		const newStations = favoriteStations.slice();
		if (stationIndex !== -1) {
			newStations[stationIndex].rating = newRating;
		} else {
			station.rating = newRating;
			newStations.push(station);
		}
		setFavoriteStations(newStations);
	}

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/favorites">
					<Favorites
						favoriteStations={favoriteStations}
						rateStation={rateStation}
					/>
				</Route>
				<Route exact path="/map" component={MapContainer} />
				<Route path="/">
					<Redirect to="/map" />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
