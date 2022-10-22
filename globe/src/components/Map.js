import React, { useCallback, useRef, useState, useEffect } from "react";

import DeckGL from "@deck.gl/react";
import { Map as MapboxMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getEventsSync } from "../backend/backend.js";
// import iconLayer from "./IconLayer";
import CreateLayers from "./Layers";

import "../App.css";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// Viewport settings
const INITIAL_VIEW_STATE = {
	longitude: 24,
	latitude: 26,
	zoom: 1.9,
	pitch: 30,
	bearing: 0,
};

export default function Map() {
	const [layers, setLayers] = useState(CreateLayers({}));
	const [data, setData] = useState([])

	useEffect(() => {
		// First call
		getEventsSync((result) => {
			setLayers(CreateLayers(result));
		});
		// Fetching of events
		const interval = setInterval(() => {
			getEventsSync((result) => {
				setLayers(CreateLayers(result));
			});
		}, 30 * 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		console.log(layers)

	}, [layers]);


	return (
		<DeckGL
			initialViewState={INITIAL_VIEW_STATE}
			controller={true}
			layers={layers}
		>
			<MapboxMap
				mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
				mapStyle="mapbox://styles/eliasbo/cl9iuvkog00io14pa0zz74brt"
				attributionControl={false}
			/>
		</DeckGL>
	);
}
