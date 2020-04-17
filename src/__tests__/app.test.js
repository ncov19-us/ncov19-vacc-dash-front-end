import React from "react";
import { renderWithRouter } from "../utils/tests/renderWithRouter";
import { renderer, create } from "@testing-library/jest-dom";
import App from "../App";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

import { BareBody, exactRoute, aboutRoute } from "../utils/tests/matches";

describe("app component", () => {
	test("for routes if a route doesnt match it will only display footer and header", () => {
		const { container } = renderWithRouter(<App />, {
			route: "/something-that-does-not-match",
		});
		const tree = renderer.create(<Header />).toJSON();
		expect(container.innerHTML).toBe(BareBody);
	});
	test("Route at exact/ should be display dashboard with map", () => {
		const { container } = renderWithRouter(<App />, {
			route: "/",
		});
		expect(container.innerHTML).toBe(exactRoute);
	});
	test("Route at /about should be display dashboard with map", () => {
		const { container } = renderWithRouter(<App />, {
			route: "/about",
		});
		expect(container.innerHTML).toBe(aboutRoute);
	});
});
