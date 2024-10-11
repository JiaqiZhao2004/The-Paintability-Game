import { Node, Edge } from "react-flow-renderer";

export function convertAdjacencyMatrixToGraph(matrix: number[][]): {
	nodes: Node[];
	edges: Edge[];
} {
	const nodes: Node[] = [];
	const edges: Edge[] = [];

	for (let i = 0; i < matrix.length; i++) {
		nodes.push({
			id: `node-${i}`,
			data: { label: `Node ${i}` },
			position: { x: Math.random() * 400, y: Math.random() * 400 },
		});
	}

	for (let i = 1; i < matrix.length; i++) {
		for (let j = i + 1; i < matrix.length; j++) {
			edges.push({
				id: `edge-${i}-${j}`,
				source: `node-${i}`,
				target: `node-${j}`,
				animated: true,
			});
		}
	}

	return { nodes, edges };
}
