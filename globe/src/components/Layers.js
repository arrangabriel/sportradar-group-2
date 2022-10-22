import IconsLayer from "./IconLayer";

/**
 *
 * @param {
 *      data: Array<{
 *          sport: string,
 *          events: string[],
 *          location: {
 *              coordinates: float[] | null,
 *              name: string
 *          }
 *    }>
 *
 * } props
 *
 * @returns
 */

export default function CreateLayers(props) {
	const { data } = props;

	const Icons = IconsLayer({
		// data: { sport: string, coordinates: float[], events: string[] }[]
		data: data
			.filter((d) => d.location.coordinates !== null)
			.map((d) => ({
				...d,
				coordinates: d.location.coordinates,
			})),
	});

	return [Icons];
}
