import React from "react";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

// test utils file
export function renderWithRouter(
	ui,
	{
		route = "/",
		history = createMemoryHistory({ initialEntries: [route] }),
	} = {}
) {
	const Wrapper = ({ children }) => (
		<Router history={history}>{children}</Router>
	);
	return {
		...render(ui, { wrapper: Wrapper }),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history,
	};
}
export const matches = (children) =>
	expect(renderer.create(children).toJSON()).toMatchSnapshot();
