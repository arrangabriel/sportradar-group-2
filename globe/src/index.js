import React from "react";
import ReactDOM from "react-dom";
import Map from "./components/Map";

import "./App.css";

const devices = [
	{
		id: "wc",
		name: "San Francisco office",
		latitude: 37.774929,
		longitude: -122.419418,
	},
	{
		id: "ar",
		name: "Buenos Aires office",
		latitude: -34.603683,
		longitude: -58.381557,
	},
	{
		id: "es",
		name: "Madrid office",
		latitude: 40.416775,
		longitude: -3.70379,
	},
	{
		id: "bcn",
		name: "Barcelona office",
		latitude: 41.385063,
		longitude: 2.173404,
	},
	{
		id: "jp",
		name: "Tokio",
		latitude: 35.6895,
		longitude: 139.69171,
	},
];

const pipes = [
	{
		server: devices.find((device) => device.id === "bcn"),
		client: devices.find((device) => device.id === "es"),
	},
	{
		server: devices.find((device) => device.id === "wc"),
		client: devices.find((device) => device.id === "es"),
	},
	{
		server: devices.find((device) => device.id === "wc"),
		client: devices.find((device) => device.id === "ar"),
	},
	{
		server: devices.find((device) => device.id === "bcn"),
		client: devices.find((device) => device.id === "ar"),
	},
	{
		server: devices.find((device) => device.id === "es"),
		client: devices.find((device) => device.id === "ar"),
	},
	{
		server: devices.find((device) => device.id === "wc"),
		client: devices.find((device) => device.id === "jp"),
	},
	{
		server: devices.find((device) => device.id === "es"),
		client: devices.find((device) => device.id === "jp"),
	},
];

function App() {
	return (
		<div className="App">
			<Map edges={devices} connections={pipes} />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
