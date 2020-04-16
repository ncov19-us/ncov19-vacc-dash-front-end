// test snapshot for app

import React from "react";
import { render } from "@testing-library/react";
import "@testing/jest-dom/extend-expect";
import axios from "axios";
import App from "../src/App";

test("<App />", () => {
	const { getAllByTestId, renderer } = render(<App />);
});
