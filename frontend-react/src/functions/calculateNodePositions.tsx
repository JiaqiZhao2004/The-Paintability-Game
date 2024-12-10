/**
 * @function calculateNodePositions
 * @brief Calculates the position of a node in a circular layout.
 *
 * @param {number} index - The index of the node in the list of nodes.
 * @param {number} num_nodes - The total number of nodes in the graph.
 * @return {Object} An object containing the x and y coordinates of the node.
 * 
 * @details
 * - Positions nodes evenly spaced around a circle.
 * - The circle is centered at `(radius, radius)`, and the radius can be customized.
 * - The angle for each node is calculated as `(2 * Math.PI * index) / num_nodes`, ensuring equal spacing.
 *
 * @example
 * ```
 * const position = calculateNodePositions(0, 5);
 * console.log(position); // { x: 300, y: 150 }
 * ```
 * 
 * @note
 * This function assumes that all nodes should be spaced equally in a circular pattern.
 */

export function calculateNodePositions(
	index: number,
	num_nodes: number
): { x: number; y: number } {
	const radius = 25 * num_nodes; // Radius of the circle
	const angle = (2 * Math.PI * index) / num_nodes;
	const x = radius * Math.cos(angle) + radius; // Adjust to center the circle
	const y = radius * Math.sin(angle) + radius;
	return { x, y };
}
