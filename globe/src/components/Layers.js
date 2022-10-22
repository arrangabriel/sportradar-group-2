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
	const Icons = IconsLayer(props);

	return [Icons];
}
