import React, { useCallback, useRef, useState } from "react";

import DeckGL from "@deck.gl/react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";
import { LineLayer } from "@deck.gl/layers";
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

function Map(props) {
	const { data } = props;

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

export default Map;
