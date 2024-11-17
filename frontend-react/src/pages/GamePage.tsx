import { useEffect, useRef, useState } from "react";
import Graph from "../components/Graph";
import {
	useNodesState,
	useEdgesState,
	NodeMouseHandler,
} from "react-flow-renderer";
import { matrixToGraphWithHealth } from "../functions/matrixToGraphWithHealth";
import Button from "../components/Button";
import Header from "../components/Header";
import PaintGraph from "../game/PaintGraph";

interface GamePageProps {
	vL: number[];
	aM: number[][];
}

const StartPageHeader = {
	title: "The Paintability Game",
	items: ["Home", "Tutorial", "Play"],
	redirects: ["home", "tutorial", "play"],
	selectedIndex: 2,
	image: undefined,
};

const GamePage = ({ vL, aM }: GamePageProps) => {
	const game = useRef(new PaintGraph(vL, aM));

	const [nodes, setNodes] = useNodesState([]);
	const [edges, setEdges] = useEdgesState([]);
	const [selectedNodeIds, setSelectedNodeIds] = useState<Set<string>>(
		new Set()
	);

	const [round, setRound] = useState(1);

	// This effect runs whenever the adjacency matrix updates
	useEffect(() => {
		const { nodes, edges } = matrixToGraphWithHealth(
			game.current.getGraph(),
			game.current.getList(),
			"customNode"
		);
		setNodes(nodes);
		setEdges(edges);
	}, [round]);

	useEffect(() => {
		console.log("Selected nodes:", selectedNodeIds);

		setNodes((prevNodes) =>
			prevNodes.map((n) => {
				let includes = selectedNodeIds.has(n.id);
				return {
					...n,
					data: {
						...n.data,
						selected: includes,
					},
					// safe: ,
				};
			})
		);
	}, [selectedNodeIds]);

	const handleSubmit = () => {
		// send request
		setSelectedNodeIds(new Set());
	};

	// append the id of the node clicked into selectedNodes[]. if it exists already, remove it.
	const handleNodeClick: NodeMouseHandler = (_, node) => {
		setSelectedNodeIds((prevSelectedNodeIds) => {
			const newSelectedNodeIds = new Set(prevSelectedNodeIds);
			if (newSelectedNodeIds.has(node.id)) {
				newSelectedNodeIds.delete(node.id);
			} else {
				newSelectedNodeIds.add(node.id);
			}
			return newSelectedNodeIds;
		});
	};

	return (
		<div
			style={{
				height: "90vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center", // Vertically center all content
				gap: "30px", // Add spacing between elements
			}}
		>
			<Header {...StartPageHeader} />
			<Graph nodes={nodes} edges={edges} handleNodeClick={handleNodeClick} />
			<Button
				label="End Turn"
				color="warning"
				onClick={handleSubmit}
				heightPctg={2}
				widthPctg={10}
			/>
		</div>
	);
};
export default GamePage;
