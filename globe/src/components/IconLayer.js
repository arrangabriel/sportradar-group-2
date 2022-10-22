import { IconLayer } from "@deck.gl/layers";

/**
 *
 * @param {*} props
 * @returns
 */

function IconsLayer(props) {

	return new IconLayer({
		id: "IconLayer",
		data: props,

		/* props from IconLayer class */

		// https://cdn-icons-png.flaticon.com/512/5481/5481749.png

		// alphaCutoff: 0.05,
		// billboard: true,
		// getAngle: 0,
		getColor: (d) => [Math.sqrt(d.exits), 140, 0],
		getIcon: (d) => ({
			url: getIcon(d.sport),
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

function getIcon(sportName) {
	return iconMap[sportName] || iconMap["generic"];
}

const iconMap = {
	"football": "https://cdn-icons-png.flaticon.com/512/2813/2813798.png",
	"basketball": "https://cdn-icons-png.flaticon.com/512/889/889289.png",
	"soccer": "https://cdn-icons-png.flaticon.com/512/1165/1165156.png",
	"cricket": "https://cdn-icons-png.flaticon.com/512/1454/1454533.png",
	"tennis": "https://cdn-icons-png.flaticon.com/512/4074/4074317.png",
	"badminton": "https://cdn-icons-png.flaticon.com/512/3445/3445542.png",
	"table tennis": "https://cdn-icons-png.flaticon.com/512/8704/8704018.png",
	"baseball": "https://cdn-icons-png.flaticon.com/512/3210/3210549.png",
	"handball": "https://cdn-icons-png.flaticon.com/512/4893/4893959.png",
	"ice hockey": "https://cdn-icons-png.flaticon.com/512/3062/3062042.png",
	"volleyball": "https://cdn-icons-png.flaticon.com/512/184/184940.png",
	"generic": "https://cdn-icons-png.flaticon.com/512/857/857492.png",
};

export default IconsLayer;
