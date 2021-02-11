import React from "react";
import { render, screen, cleanup, act, waitFor } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import { getParkingSpots } from "../services/paris-requests";

import MapContainer from "../components/MapContainer";

afterEach(() => {
	cleanup();
	jest.resetAllMocks();
});

jest.mock("../services/paris-requests.ts");

const mockedService = mocked(getParkingSpots);

it("fetches data from Paris API and displays them", async () => {
	const data = [
		{ recordid: 1, geometry: { coordinates: [0, 0] } },
		{ recordid: 2, geometry: { coordinates: [0, 1] } },
	];

	mockedService.mockImplementationOnce(() =>
		Promise.resolve({ records: data })
	);

	await act(async () => {
		const { getAllByText } = render(<MapContainer />);
		await waitFor(() => [
			expect(getAllByText("TRUE MARKER")).toHaveLength(2),
		]);
	});
});
