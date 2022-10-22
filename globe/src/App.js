/// app.js
import React from "react";
import Map from "./components/Map";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiZWxpYXNibyIsImEiOiJjbDlqb3ZtZmgwb2RjNDFvZGpjYzM3NThsIn0.dsVLOFPMeZCI4TnSkGENNw";

// Viewport settings
const INITIAL_VIEW_STATE = {
	longitude: 24,
	latitude: 26,
	zoom: 1.9,
	pitch: 30,
	bearing: 0,
};

// Data to be used by the LineLayer
const data = [
	{
		sourcePosition: [-122.41669, 37.7853],
		targetPosition: [-122.41669, 37.781],
	},
];

export default function App() {
	return (
		<div className="App">
			<Map data={data} />
		</div>
	);
}
