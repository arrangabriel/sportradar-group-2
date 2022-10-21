import React, { useState, useRef, useCallback } from "react";
import DeckGL from "@deck.gl/react";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import ConnectionsLayer from "./ConnectionsLayer";
import DevicesBasesLayer from "./DevicesBasesLayer";
import DeviceMarker from "./DeviceMarker";

function Map(props) {
	const { edges, connections } = props;

	const mapRef = useRef();

	//window.mapRef = mapRef;

	const [viewport, setViewport] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
		latitude: 37.77493,
		longitude: -122.41942,
		zoom: 1,
	});

	const tunnels = connections.reduce((result, connection) => {
		for (let i = -2; i <= 2; i++) {
			result.push({
				...connection,
				titl: i * 7,
			});
		}
		return result;
	}, []);

	const handleViewportChange = useCallback((newViewport, e) => {
		// newViewport.pitch = Math.min(50, newViewport.zoom * 15)
		// setViewport({ ...newViewport })

		// TODO: Investigate why the following code raise a "Maximum update depth exceeded" error on multiples double-click zoom event.. :/
		setViewport({
			...newViewport,
			pitch: Math.min(50, newViewport.zoom * 15),
		});
	}, []);

	const connectionLayer = ConnectionsLayer({
		connections: tunnels,
	});

	const devicesBasesLayer = DevicesBasesLayer({
		devices: edges,
	});

	return (
		<ReactMapGL
			mapboxApiAccessToken="pk.eyJ1IjoiZGFuY2UyZGllIiwiYSI6ImNqa3Voa254bDk1bjEzcW1sOTFlbjl0eW8ifQ.d72JL668F0_uoLLK1lqhGQ"
			attributionControl={false}
			dragRotate={false}
			boxZoom={false}
			onViewportChange={handleViewportChange}
			//getCursor={() => "pointer"}
			ref={mapRef}
			{...viewport}
			debug
		>
			<DeckGL
				layers={[devicesBasesLayer, connectionLayer]}
				viewState={viewport}
				getCursor={() => "inherit"}
			/>
			<DeviceMarker
				latitude={edges[0].latitude}
				longitude={edges[0].longitude}
			/>
			{/*edges.map(edge => (
        <Marker latitude={edge.latitude} longitude={edge.longitude}>
          <div
            style={{
              background: "red",
              cursor: "pointer",
              width: 32,
              height: 32,
              borderRadius: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
              //opacity: 0.3
            }}
            title={edge.name}
            onClick={() => console.log("device click")}
            onMouseEnter={() => console.log("device hover")}
          >
            {edge.name[0]}
          </div>
        </Marker>
          ))*/}
		</ReactMapGL>
	);
}

export default Map;
