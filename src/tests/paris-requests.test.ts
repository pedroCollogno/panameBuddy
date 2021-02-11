import axios from "axios";

import { getParkingSpots } from "../services/paris-requests";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
	jest.resetAllMocks();
});

it("fetches data from Paris API", async () => {
	const data = {
		records: [
			{ recordid: 1, geometry: { coordinates: [0, 0] } },
			{ recordid: 2, geometry: { coordinates: [0, 1] } },
		],
	};
	mockedAxios.get.mockImplementation(() => Promise.resolve({ data: data }));

	const returnedData = await getParkingSpots();
	expect(axios.get).toHaveBeenCalledTimes(1);
	expect(returnedData).toEqual(data);
});
