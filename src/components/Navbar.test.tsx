import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Navbar from "./Navbar";

afterEach(cleanup);

it("Navbar displays the right links", () => {
	const { queryByLabelText, getByLabelText } = render(<Navbar />);

	expect(queryByLabelText(/map/i)).toBeTruthy();

	expect(queryByLabelText(/favorite/i)).toBeTruthy();
});
