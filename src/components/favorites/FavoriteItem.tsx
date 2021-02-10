import React from "react";
import { FavoriteStation } from "../../utils/interfaces";

function FavoriteItem(station: FavoriteStation) {
	return (
		<div>
			<p>{station.name}</p>
			<p>{station.rating}</p>
		</div>
	);
}

export default FavoriteItem;
