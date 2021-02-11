import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";

import MapContainer from "../components/MapContainer";

jest.mock("axios");

it("fetches data from Paris API and displays them", async () => {
	const data = [
		{ recordid: 1, geometry: { coordinates: [0, 0] } },
		{ recordid: 2, geometry: { coordinates: [0, 1] } },
	];

	axios.get.mockImplementationOnce(() =>
		Promise.resolve({ data: { records: data } })
	);

	await render(<MapContainer />);

	const markers = screen.findAllByRole("area");

	expect(markers).toHaveLength(2);
});
