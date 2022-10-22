import { IconLayer } from "@deck.gl/layers";

/**
 *
 * @param {*} props
 * @returns
 */

function IconsLayer(props) {
	const { data } = props;

	return new IconLayer({
		id: "IconLayer",
		data: data,

		/* props from IconLayer class */

		// https://cdn-icons-png.flaticon.com/512/5481/5481749.png

		// alphaCutoff: 0.05,
		// billboard: true,
		// getAngle: 0,
		getColor: (d) => [Math.sqrt(d.exits), 140, 0],
		getIcon: (d) => ({
			url: "https://cdn-icons-png.flaticon.com/512/5481/5481749.png",
			width: 128,
			height: 128,
			anchorY: 128,
		}),
		// getPixelOffset: [0, 0],
		getPosition: (d) => d.coordinates,
		getSize: (d) => 5,

		// onIconError: null,
		// sizeMaxPixels: Number.MAX_SAFE_INTEGER,
		// sizeMinPixels: 0,
		sizeScale: 8,
		// sizeUnits: 'pixels',

		/* props inherited from Layer class */

		// autoHighlight: false,
		// coordinateOrigin: [0, 0, 0],
		// coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
		// highlightColor: [0, 0, 128, 128],
		// modelMatrix: null,
		// opacity: 1,
		pickable: true,
		// visible: true,
		// wrapLongitude: false,
	});
}

export default IconsLayer;
