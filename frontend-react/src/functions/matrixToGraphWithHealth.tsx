import { Node, Edge } from "react-flow-renderer";
import { calculateNodePositions } from "./calculateNodePositions";

export function matrixToGraphWithHealth(
	matrix: number[][],
	health: number[],
	nodeType: string
): {
	nodes: Node[];
	edges: Edge[];
} {
	const nodes: Node[] = [];
	const edges: Edge[] = [];

	for (let i = 0; i < matrix.length; i++) {
		const { x, y } = calculateNodePositions(i, matrix.length);
		nodes.push({
			id: `node-${i}`,
			data: { label: `Node ${i}`, health: health[i], safe: true}, // 'active' is for showing if the node is selected
			position: { x: x, y: y },
			type: nodeType,
			style: { backgroundColor: "white" }, // Initial color for inactive nodes
		});
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = i + 1; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				edges.push({
					id: `edge-${i}-${j}`,
					source: `node-${i}`,
					target: `node-${j}`,
					animated: true,
				});
			}
		}
	}
	return { nodes, edges };
}
