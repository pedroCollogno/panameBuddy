import React from "react";
import { render, screen } from "@testing-library/react";

import Routes from "../components/Routes";

it("Navbar displays the right links", () => {
	render(<Routes />);

	expect(screen.getByText("Map")).toBeInTheDocument();
	expect(screen.getByText("My favorite stations")).toBeInTheDocument();
});
