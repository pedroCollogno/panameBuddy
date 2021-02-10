import React from "react";
import { FavoriteStation } from "../../utils/interfaces";
import FavoriteItem from "./FavoriteItem";

export interface Props {
	favorites: Array<FavoriteStation>;
	rateStation: Function;
}

function FavoriteList({ favorites, rateStation }: Props) {
	return (
		<div>
			{favorites.map(station => (
				<FavoriteItem station={station} />
			))}
		</div>
	);
}

export default FavoriteList;
