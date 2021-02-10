import React from "react";
import { FavoriteStation } from "../../utils/interfaces";

export interface Props {
	station: FavoriteStation;
	rateStation: Function;
}

function FavoriteItem({ station, rateStation }: Props) {
	return (
		<div>
			<p>{station.name}</p>
			<p>{station.rating}</p>
		</div>
	);
}

export default FavoriteItem;
