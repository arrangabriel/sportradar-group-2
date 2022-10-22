/// app.js
import React from "react";
import Map from "./components/Map";

export default function App() {
	return (
		<div className="App">
			<Map />
		</div>
	);
}

// Data to be used by the LineLayer
const data = [
	{
		sport: "handball",
		events: ["time", "generic"],
		location: [23.8445691, 38.037762],
	},
	{
		sport: "ice hockey",
		events: ["time"],
		location: [34.243169, 62.20632],
	},
	{
		sport: "basketball",
		events: ["goal", "goal"],
		location: [22.959263, 40.650845],
	},
	{
		sport: "volleyball",
		events: ["in-play"],
		location: [32.820102, 39.936004],
	},
	{
		sport: "basketball",
		events: ["generic", "goal"],
		location: [55.168961, 51.773948],
	},
	{
		sport: "basketball",
		events: ["time", "time"],
		location: [92.864194, 56.012903],
	},
	{
		sport: "basketball",
		events: ["time", "generic"],
		location: [22.19543, 62.424461],
	},
	{
		sport: "basketball",
		events: ["goal"],
		location: [28.20355, 61.05862],
	},
	{
		sport: "basketball",
		events: ["time"],
		location: [29.91143, 40.764595],
	},
	{
		sport: "basketball",
		events: ["time"],
		location: [19.37731, 44.188016],
	},
	{
		sport: "soccer",
		events: ["refree", "refree", "refree"],
		location: [25.495, 65.030278],
	},
	{
		sport: "basketball",
		events: ["goal", "time"],
		location: [30.70575, 36.9260349],
	},
];