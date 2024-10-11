import { Node, Edge } from "react-flow-renderer";
import { calculateNodePositions } from "./calculateNodePositions";

export function convertAdjacencyMatrixToGraph(matrix: number[][]): {
	nodes: Node[];
	edges: Edge[];
} {
	const nodes: Node[] = [];
	const edges: Edge[] = [];

	for (let i = 0; i < matrix.length; i++) {
		const { x, y } = calculateNodePositions(i, matrix.length);
		nodes.push({
			id: `node-${i}`,
			data: { label: `Node ${i}` },
			position: { x: x, y: y },
			type: "default",
			selectable: true,
			draggable: true,
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
