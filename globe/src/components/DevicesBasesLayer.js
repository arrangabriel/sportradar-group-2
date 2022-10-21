import { ScatterplotLayer } from "@deck.gl/layers";

const displaceEdge = (edge, amount) => ({
	...edge,
	longitude: edge.longitude + amount * 360,
});

function DevicesBasesLayer(props) {
	const {
		adiacent = true,
		devices,
		getFillColor = (d) => [0, 145, 234, 128],
		getLineColor = (d) => [255, 128, 0],
		getPosition = (d) => [d.longitude, d.latitude, 0],
		id = "devices-bases-layer",
		lineWidthMinPixels = 3,
		pickable = true,
		width = 12,
		onClick = (d) => {
			console.log("click device base", d.object);
		},
		onHover = (d) => {
			console.log("hover device base", d.object);
		},
		onLeave = (d) => {
			console.log("leave device base", d.object);
		},
		stroked = true,
		...otherProps
	} = props;

	const displayDevices = devices.reduce((result, device) => {
		result.push(device);
		if (adiacent) {
			result.push(displaceEdge(device, 1));
			result.push(displaceEdge(device, -1));
		}
		return result;
	}, []);

	return new ScatterplotLayer({
		...otherProps,
		data: displayDevices,
		getFillColor,
		getLineColor,
		getPosition,
		id,
		lineWidthMinPixels,
		onClick,
		onHover,
		onLeave,
		pickable,
		radiusMinPixels: width,
		stroked,
	});
}

export default DevicesBasesLayer;
