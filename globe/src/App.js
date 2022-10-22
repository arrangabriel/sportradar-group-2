/// app.js
import React from "react";
import Map from "./components/Map";

// Data to be used by the LineLayer
const data = [
	{
		sport: "handball",
		events: ["time", "generic"],
		location: { coordinates: [23.8445691, 38.037762], name: "Vrilissia" },
	},
	{
		sport: "ice hockey",
		events: ["time"],
		location: { coordinates: [34.243169, 62.20632], name: "Kondopoga" },
	},
	{
		sport: "basketball",
		events: ["goal", "goal"],
		location: { coordinates: [22.959263, 40.650845], name: "Thessaloniki" },
	},
	{
		sport: "volleyball",
		events: ["in-play"],
		location: { coordinates: [32.820102, 39.936004], name: "Ankara" },
	},
	{
		sport: "basketball",
		events: ["generic", "goal"],
		location: { coordinates: [55.168961, 51.773948], name: "Orenburg" },
	},
	{
		sport: "basketball",
		events: ["time", "time"],
		location: { coordinates: [92.864194, 56.012903], name: "Krasnoyarsk" },
	},
	{
		sport: "basketball",
		events: ["time", "generic"],
		location: { coordinates: [22.19543, 62.424461], name: "Kauhajoki" },
	},
	{
		sport: "basketball",
		events: ["goal"],
		location: { coordinates: [28.20355, 61.05862], name: "Lappeenranta" },
	},
	{
		sport: "basketball",
		events: ["goal", "time"],
		location: { coordinates: null, name: "Sweden" },
	},
	{
		sport: "basketball",
		events: ["time"],
		location: { coordinates: null, name: "China" },
	},
	{
		sport: "basketball",
		events: ["time"],
		location: { coordinates: [29.91143, 40.764595], name: "Kocaeli" },
	},
	{
		sport: "basketball",
		events: ["time"],
		location: { coordinates: [19.37731, 44.188016], name: "Ljubovija" },
	},
	{
		sport: "soccer",
		events: ["refree", "refree", "refree"],
		location: { coordinates: [25.495, 65.030278], name: "Oulu" },
	},
	{
		sport: "basketball",
		events: ["goal", "goal", "time", "time"],
		location: { coordinates: null, name: "Kazakhstan" },
	},
	{
		sport: "basketball",
		events: ["goal", "time"],
		location: { coordinates: [30.70575, 36.9260349], name: "Antalya" },
	},
];

export default function App() {
	return (
		<div className="App">
			<Map data={data} />
		</div>
	);
}
