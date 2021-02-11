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

function Routes() {
	const [favorites, setFavorites] = useState([]);
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/favorites">
					<Favorites />
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
