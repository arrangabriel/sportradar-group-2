import React, { useCallback, useRef, useState } from "react";

import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { Map as MapboxMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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

// pk.eyJ1IjoiZWxpYXNibyIsImEiOiJjbDlqcjl2cGEwOHNpM25wbGpuOWt4M2J5In0.QTfDDzyvlaU5MBgkx3KqBA
// export REACT_APP_MAPBOX_TOKEN={pk.eyJ1IjoiZWxpYXNibyIsImEiOiJjbDlqcjl2cGEwOHNpM25wbGpuOWt4M2J5In0.QTfDDzyvlaU5MBgkx3KqBA} && npm start

export default function Map(props) {
	const { data } = props;

	const layers = [new LineLayer({ id: "line-layer", data })];

	return (
		<DeckGL
			initialViewState={INITIAL_VIEW_STATE}
			controller={false}
			layers={layers}
		>
			<MapboxMap
				mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
				mapStyle="mapbox://styles/eliasbo/cl9iuvkog00io14pa0zz74brt"
			/>
		</DeckGL>
	);
}
