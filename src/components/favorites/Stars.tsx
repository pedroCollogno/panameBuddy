import { useState } from "react";
export interface Props {
	rating: number;
	changeRating?: Function;
}

function Stars({ rating, changeRating }: Props) {
	const fullStars = Math.floor(rating);
	const stars: Array<string> = [];
	for (let i = 0; i < 5; i++) {
		if (i < fullStars) {
			stars.push("success");
		} else {
			stars.push("danger");
		}
	}

	function onClickStar(starIndex: number) {
		if (changeRating) {
			changeRating(starIndex);
		}
	}

	return (
		<div className="content">
			{stars.map((starString, index) => (
				<span
					className={`icon has-text-${starString}`}
					key={index}
					onClick={() => onClickStar(index)}
				>
					S<i className="fa fa-home"></i>
				</span>
			))}
		</div>
	);
}

export default Stars;
