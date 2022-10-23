import React, { useCallback, useRef, useState, useEffect, useLayoutEffect } from "react";

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

let roundTime = 30 * 1000

export default function Map() {
	const [layers, setLayers] = useState(CreateLayers([{}]));
	const [events, setEvents] = useState([]);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		// First call
		getEventsSync((newEvents) => {
			setCounter(0)
			setEvents(newEvents)
		});
		// Fetching of events
		const interval = setInterval(() => {
			getEventsSync((newEvents) => {
				setEvents(newEvents)
			});
		}, roundTime);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		new Promise(r => setTimeout(r, (roundTime * 3) / events.length)).then(() => {
			setCounter(counter + Math.floor(4 * Math.random() + 1))
			if (counter > events.length) {
				setCounter(0)
			}
			let lowerBound = counter < events.length / 2 ? Math.floor(counter / 3) : Math.floor(counter / 1.2)
			//console.log(lowerBound, counter, events.length)
			setLayers([CreateLayers(events.slice(lowerBound, (counter) % events.length))])
		})
	}, [layers])



	// variables
	const step = 0.1;
	const intervalMS = 20;
	const loopLength = 2500;

	const [time, setTime] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(t => (t - step) % loopLength);
		}, intervalMS);

		return () => clearInterval(interval);
	}, []);


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
