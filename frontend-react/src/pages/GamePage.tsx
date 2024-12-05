/**
 * @file GamePage.tsx
 * @class GamePage
 * @brief The GamePage component for rendering and managing the core gameplay page.
 *
 * This component handles the rendering of a graph-based game, where players interact with graph nodes
 * and edges. It integrates the PaintGraph class for game logic, manages game state, and provides user
 * interactions such as selecting nodes and ending turns.
 *
 * Dependencies:
 * - React Flow: for graph visualization.
 * - Bootstrap: for frontend graphics.
 * - PaintGraph.ts: for game logic and state management.
 * - Custom components: Graph, Header, Button.
 *
 * @module GamePage
 */

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
import { randomGraph, randomList } from "../game/randomGen";
import PlayerInfo from "../components/PlayerInfo";

/**
 * @typedef GamePageProps
 * @brief Properties passed to the GamePage component.
 *
 * @property {number} n - Number of verticies.
 * @property {number} p - Parameter for random edge generation. Edge density.
 * @property {boolean} isEvilRole - Whether the player's role is Evil Mastermind.
 */

interface GamePageProps {
	n: number;
	p: number;
	isEvilRole: boolean;
}

/**
 * @constant GamePageHeader
 * @brief Default header configuration for the GamePage component.
 */

const GamePageHeader = {
	title: "The Paintability Game",
	items: ["Home", "Tutorial", "Play"],
	redirects: ["home", "tutorial", "play"],
	selectedIndex: 2,
	image: undefined,
};

/**
 * @function GamePage
 * @brief The main gameplay page for the Paintability Game.
 *
 * @param {number} n - The number of nodes in the graph.
 * @returns {JSX.Element} The JSX representation of the gameplay page.
 *
 * @details
 * This component randomly generates a pair of adjacency matrix and vertex health list, and hence initializes a PaintGraph instance.
 * It renders the game graph, manages the game state, and handles user interactions. The graph is updated
 * dynamically at the start of each round and when nodes are selected.
 *
 * **Key Features**:
 * - Generates a random adjacency matrix and vertex health list as start state.
 * - Renders a graph with nodes and edges based on the adjacency matrix and health list.
 * - Handles user interactions, such as node selection and turn submission.
 * - Manages game state using the PaintGraph class.
 * - Updates graph visuals dynamically based on game progress.
 */

const GamePage = ({ n, p, isEvilRole }: GamePageProps) => {
	/**
	 * @var aM
	 * @brief Randomly generated adjacency matrix. Game start state.
	 */
	const aM = randomGraph(n, p);

	/**
	 * @var vL
	 * @brief Randomly generated vertex health list. Game start state.
	 */
	const vL = randomList(aM, n);

	/**
	 * @var game
	 * @brief Reference to the PaintGraph instance managing the game state and logic. Keeps all node and edge states.
	 */
	const game = useRef(new PaintGraph(vL, aM));

	/**
	 * @var isLeftPlayersTurn
	 * @brief Whether the current turn is of the left player.
	 */
	const [isLeftPlayersTurn, setIsLeftPlayersTurn] = useState(isEvilRole);

	/**
	 * @var displayedNodes
	 * @brief Graph's nodes displayed by react-flow-renderer. A dummy intermediate variable for game's node states.
	 */
	const [displayedNodes, setDisplayedNodes] = useNodesState([]);

	/**
	 * @var displayedEdges
	 * @brief Graph's edges displayed by react-flow-renderer. A dummy intermediate variable for game's edge states.
	 */
	const [displayedEdges, setDisplayedEdges] = useEdgesState([]);

	/**
	 * @var selectedNodeIds
	 * @brief Set of node IDs currently selected by the user.
	 */
	const [selectedNodeIds, setSelectedNodeIds] = useState<Set<string>>(
		new Set()
	);

	let isEvilsTurn =
		(isEvilRole && isLeftPlayersTurn) || (!isEvilRole && !isLeftPlayersTurn);

	/**
	 * @brief Effect to initialize and keep all displayed nodes and edges up to date with game when the round changes.
	 */
	useEffect(() => {
		const { nodes, edges } = matrixToGraphWithHealth(
			game.current.getGraph(),
			game.current.getList(),
			"customNode",
			isEvilsTurn
		);
		setDisplayedNodes(nodes);
		setDisplayedEdges(edges);
	}, [isLeftPlayersTurn]);

	/**
	 * @brief Effect to update node visuals when node is selected.
	 */
	useEffect(() => {
		console.log("Selected nodes:", selectedNodeIds);

		setDisplayedNodes((prevNodes) =>
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

	/**
	 * @function handleSubmit
	 * @brief
	 */
	const handleSubmit = () => {
		const ids: number[] = Array.from(selectedNodeIds).map((id) => +id.slice(5));
		console.log(ids);
		let validMove = true;
		if (isEvilsTurn) {
			game.current.attack(ids);
		} else {
			validMove = game.current.defend(ids);
		}

		if (validMove) {
			console.log(game.current.getGameState());
			setSelectedNodeIds(new Set());
			setIsLeftPlayersTurn((prev) => !prev);
		} else {
			console.log("Invalid");
		}
	};

	/**
	 * @function handleNodeClick
	 * @brief Toggles the selection state of a node when clicked.
	 *
	 * @param {React.MouseEvent} _ - The event object (not used).
	 * @param {Node} node - The node being clicked.
	 */

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
			<Header {...GamePageHeader} />
			<div style={{ position: "absolute", top: 100, left: 110 }}>
				<PlayerInfo
					playerName="Player 1"
					isEvilRole={isEvilRole}
					glow={isLeftPlayersTurn}
					left={true}
				/>
			</div>
			<div style={{ position: "absolute", top: 100, right: 110 }}>
				<PlayerInfo
					playerName="Player 2"
					isEvilRole={!isEvilRole}
					glow={!isLeftPlayersTurn}
					left={false}
				/>
			</div>
			<Graph
				nodes={displayedNodes}
				edges={displayedEdges}
				handleNodeClick={handleNodeClick}
			/>
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
