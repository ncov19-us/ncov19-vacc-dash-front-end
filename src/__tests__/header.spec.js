import React from "react";
import Header from "../pages/Header";
import { renderWithRouter } from "../utils/tests/renderWithRouter";

describe("Header Component", () => {
	test("For burger menu to show onclick", () => {
		const { container } = renderWithRouter(<Header />, {
			route: "/",
		});
		console.log("container", container);
	});
});
