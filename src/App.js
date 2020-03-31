import React from "react";

import Header from "./pages/Header";
import Footer from "./pages/Footer";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Header />
			<h1>Ncov-19 Vaccine Dashboard</h1>
			<Footer />
		</div>
	);
}
