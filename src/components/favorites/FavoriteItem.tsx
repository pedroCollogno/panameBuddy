import { useState, ChangeEvent } from "react";

import Stars from "./Stars";
import { FavoriteStation } from "../../utils/interfaces";

export interface Props {
	station: FavoriteStation;
	rateStation: Function;
}

function FavoriteItem({ station, rateStation }: Props) {
	const [rating, setRating] = useState(station.rating);
	function changeRating(e: ChangeEvent<HTMLInputElement>) {
		const newRating = parseFloat(e.currentTarget.value);
		rateStation(station, newRating);
		setRating(newRating);
	}

	return (
		<div>
			<p>{station.recordid}</p>
			<input value={rating} onChange={changeRating} />
			<Stars rating={rating} />
		</div>
	);
}

export default FavoriteItem;
