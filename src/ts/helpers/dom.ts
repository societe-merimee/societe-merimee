export const setAttributes = <T extends Element>(
	element: T,
	attributes: Record<string, string>
) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key] ?? '')
	}
}
