import FavoriteList from "./favorites/FavoriteList";
import { FavoriteStation } from "../utils/interfaces";

export interface Props {
	favoriteStations: Array<FavoriteStation>;
	rateStation: Function;
}

function Favorites({ favoriteStations, rateStation }: Props) {
	return (
		<div>
			<h1>Favorites</h1>
			<FavoriteList
				favorites={favoriteStations}
				rateStation={rateStation}
			/>
		</div>
	);
}

export default Favorites;
