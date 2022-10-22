// app.js
import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiZWxpYXNibyIsImEiOiJjbDlqb3ZtZmgwb2RjNDFvZGpjYzM3NThsIn0.dsVLOFPMeZCI4TnSkGENNw";

// Viewport settings
const INITIAL_VIEW_STATE = {
	longitude: -122.41669,
	latitude: 37.7853,
	zoom: 13,
	pitch: 0,
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
	const layers = [new LineLayer({ id: "line-layer", data })];

	return (
		<DeckGL
			initialViewState={INITIAL_VIEW_STATE}
			controller={true}
			layers={layers}
		>
			<ReactMapGL mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
		</DeckGL>
	);
}
