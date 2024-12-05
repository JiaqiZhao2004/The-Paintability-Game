/**
 * @function matrixToGraphWithHealth
 * @brief Converts an adjacency matrix and health data into a graph structure with nodes and edges.
 *
 * @param {number[][]} matrix - The adjacency matrix representing connections between nodes.
 * @param {number[]} health - An array of integers representing the health values for each node.
 * @param {string} nodeType - The type of the node, used for customization in the graph renderer.
 * @return {Object} An object containing:
 *   - `nodes`: An array of Node objects, each representing a node in the graph.
 *   - `edges`: An array of Edge objects, each representing a connection between nodes.
 *
 * @details
 * - Nodes are placed in a circular layout, with positions calculated by `calculateNodePositions`.
 * - Each node contains metadata such as health, max health, and whether it's selected or safe.
 * - Edges are generated for pairs of nodes where the adjacency matrix indicates a connection.
 * - Edges can be customized with properties such as `type`, `style`, and animation.
 *
 * @example
 * ```
 * const adjacencyMatrix = [
 *   [0, 1, 0],
 *   [1, 0, 1],
 *   [0, 1, 0],
 * ];
 * const health = [100, 80, 60];
 * const graph = matrixToGraphWithHealth(adjacencyMatrix, health, "customNode");
 * console.log(graph.nodes); // Array of nodes with health and metadata
 * console.log(graph.edges); // Array of edges connecting nodes
 * ```
 *
 * @note
 * - The `matrix` and `health` arrays must be of compatible lengths.
 * - Each node is assigned a unique ID based on its index.
 */

import { Node, Edge } from "react-flow-renderer";
import { calculateNodePositions } from "./calculateNodePositions";

export function matrixToGraphWithHealth(
	matrix: number[][],
	health: number[],
	nodeType: string,
	isEvilRole: boolean
): {
	nodes: Node[];
	edges: Edge[];
} {
	const nodes: Node[] = [];
	const edges: Edge[] = [];

	for (let i = 0; i < health.length; i++) {
		const { x, y } = calculateNodePositions(i, health.length);
		nodes.push({
			id: `node-${i}`,
			data: {
				label: `Node ${i}`,
				maxHealth: Math.max(...health),
				health: health[i],
				isEvilRole: isEvilRole,
				selected: false,
			},
			position: { x: x, y: y },
			type: nodeType,
			style: { backgroundColor: "transparent" },
		});
	}

	for (let i = 0; i < health.length; i++) {
		for (let j = i + 1; j < health.length; j++) {
			if (matrix[i][j] === 1) {
				edges.push({
					id: `edge-${i}-${j}`,
					source: `node-${i}`,
					target: `node-${j}`,
					type: "straight",
					style: { strokeWidth: 5 },
					animated: true,
				});
			}
		}
	}
	return { nodes, edges };
}
