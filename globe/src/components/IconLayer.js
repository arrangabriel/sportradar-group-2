import { IconLayer } from "@deck.gl/layers";

/**
 *
 * @param {*} props
 * @returns
 */

function IconsLayer(props) {

	return new IconLayer({
		id: props.id,
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
		opacity: 1,
		pickable: true,
		// visible: true,
		// wrapLongitude: false,
	});
}

function getIcon(sportName) {
	return iconMap[sportName] || iconMap["generic"];
}

const iconMap = {
	"football": "./sport-icons/american-football-pin.png",
	"basketball": "./sport-icons/basketball-pin.png",
	"soccer": "./sport-icons/soccer-pin.png",
	"cricket": "./sport-icons/cricket-pin.png",
	"tennis": "./sport-icons/tennis-pin.png",
	"badminton": "./sport-icons/badminton-pin.png",
	"table tennis": "./sport-icons/ping-pong-pin.png",
	"baseball": "./sport-icons/baseball-pin.png",
	"handball": "./sport-icons/handball-pin.png",
	"ice hockey": "./sport-icons/ice-hockey-pin.png",
	"volleyball": "./sport-icons/volleyball-pin.png",
	"generic": "./sport-icons/generic-pin.png",
};

export default IconsLayer;
