// app.js
import React from "react";
import Map from "./components/Map";

// Data to be used by the LineLayer
const data = [
	{
		sourcePosition: [-122.41669, 37.7853],
		targetPosition: [-122.41669, 37.781],
	},
];

export default function App() {
	return <Map data={data} />;
}
