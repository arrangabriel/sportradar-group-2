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

export default function CreateLayers(events) {
	const icons = []

	for (let event of events) {
		event.createdTime = Date.now()
		icons.push(IconsLayer([event]))
	}

	return icons;
}
