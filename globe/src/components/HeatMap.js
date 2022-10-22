import { HeatmapLayer } from "@deck.gl/aggregation-layers";

export default function HeatMap(props) {
	const data = [
		{ position: [0, 0], weight: 1 },
		{ position: [100, 0], weight: 1 },
	];

	return new HeatmapLayer({
		id: "heatmap",
		data,
		getPosition: (d) => d.location.coordinates,
		getWeight: (d) => 1,
		radiusPixels: 60,
		aggregation: "SUM",
	});
}
