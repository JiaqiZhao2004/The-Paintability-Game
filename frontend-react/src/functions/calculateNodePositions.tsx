export function calculateNodePositions(
	index: number,
	num_nodes: number
): { x: number; y: number } {
	const radius = 150; // Radius of the circle
	const angle = (2 * Math.PI * index) / num_nodes;
	const x = radius * Math.cos(angle) + radius; // Adjust to center the circle
	const y = radius * Math.sin(angle) + radius;
	return { x, y };
}
