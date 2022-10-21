import { ArcLayer } from "@deck.gl/layers";

const displaceEdge = (edge, amount) => ({
	...edge,
	longitude: edge.longitude + amount * 360,
});

function ConnectionsLayer(props) {
	const {
		connections,
		id = "connections-layer",
		adiacent = 1,
		pickable = true,
		wrapLongitude = true,
		getWidth = 5,
		getSourcePosition = (d) => [d.server.longitude, d.server.latitude],
		getTargetPosition = (d) => [d.client.longitude, d.client.latitude],
		getColor = (d) => [255, 128, 0],
		getHeight = (d) => 0.75,
		getTilt = (d) => d.titl || 0,
		onClick = (d) => {
			console.log("click connection", d.object);
		},
		onHover = (d) => {
			console.log("hover connection", d.object);
		},
		onLeave = (d) => {
			console.log("leave connection", d.object);
		},
		...otherProps
	} = props;

	const displayConnections = connections.reduce((result, connection) => {
		const overPacific =
			connection.client.longitude - connection.server.longitude > 180;

		if (!overPacific) {
			result.push(connection);

			if (adiacent) {
				// Render left / right adiacent worlds representations
				result.push({
					...connection,
					server: displaceEdge(connection.server, 1),
					client: displaceEdge(connection.client, 1),
				});
				result.push({
					...connection,
					server: displaceEdge(connection.server, -1),
					client: displaceEdge(connection.client, -1),
				});
			}
		} else {
			result.push({
				...connection,
				server: displaceEdge(connection.server, 1),
			});

			if (wrapLongitude) {
				// Make connections over pacific
				result.push({
					...connection,
					client: displaceEdge(connection.client, -1),
				});
			}
		}

		return result;
	}, []);

	return new ArcLayer({
		data: displayConnections,
		getHeight,
		getSourceColor: getColor,
		getSourcePosition,
		getTargetColor: getColor,
		getTargetPosition,
		getTilt,
		getWidth,
		id,
		onClick,
		onHover,
		onLeave,
		pickable,
		wrapLongitude: false, // We already managed the wrapLongitude our way: with displayConnections
		...otherProps,
	});
}

export default ConnectionsLayer;
