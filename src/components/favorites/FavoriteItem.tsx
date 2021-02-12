import { useState, ChangeEvent } from "react";

import Stars from "./Stars";
import { FavoriteStation } from "../../utils/interfaces";

export interface Props {
	station: FavoriteStation;
	rateStation: Function;
}

function FavoriteItem({ station, rateStation }: Props) {
	const [rating, setRating] = useState(station.rating);

	const onChangeRating = (newRating: number) => {
		newRating += 1;
		setRating(newRating);
		rateStation(station, newRating);
	};

	return (
		<div>
			<p>{station.recordid}</p>
			<Stars
				rating={rating}
				changeRating={(rating: number) => onChangeRating(rating)}
			/>
		</div>
	);
}

export default FavoriteItem;
