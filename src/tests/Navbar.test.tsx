import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Routes from "../components/Routes";

afterEach(() => {
	cleanup();
});

it("Navbar displays the right links", () => {
	render(<Routes />);

	expect(screen.getByText("Map")).toBeInTheDocument();
	expect(screen.getByText("My favorite stations")).toBeInTheDocument();
});
