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
import TutorialPage from "./TutorialPage";
import Alert from "../components/Alert";
import "./GamePage.css";

/**
 * @typedef GamePageProps
 * @brief Properties passed to the GamePage component.
 *
 * @property {number} n - Number of verticies.
 * @property {number} p - Parameter for random edge generation. Edge density.
 * @property {number} difficulty - The difficulty for the defender, 0 easiest, 1 hardest.
 * @property {boolean} isEvilRole - Whether the player's role is Evil Mastermind.
 */

interface GamePageProps {
	n: number;
	p: number;
	difficulty: number;
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
 * @param {number} p - The density of edges in the graph.
 * @param {number} difficulty - The difficulty for the defender, 0 easiest, 1 hardest.
 * @param {boolean} isEvilRole - Whether the player is Evil Mastermind.
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

const GamePage = ({ n, p, difficulty, isEvilRole }: GamePageProps) => {
	/**
	 * @var aM
	 * @brief Randomly generated adjacency matrix. Game start state.
	 */
	const aM = randomGraph(n, p);

	/**
	 * @var vL
	 * @brief Randomly generated vertex health list. Game start state.
	 */
	const vL = randomList(aM, n, difficulty);

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

	/**
	 * @var invalidSelectionNotice
	 * @brief Whether to show .
	 */
	const [invalidSelectionNotice, setInvalidSelectionNotice] = useState(false);

	/**
	 * @var gameEnd
	 * @brief Whether any player won.
	 */
	const [gameEnd, setGameEnd] = useState(false);

	/**
	 * @var showTutorial
	 * @brief Whether show tutorialPage on the left side.
	 */
	const [showTutorial, setShowTutorial] = useState(false);

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
			game.current.getGameState().vtxSafe,
			game.current.getGameState().vtxAttack
		);
		setDisplayedNodes(nodes);
		setDisplayedEdges(edges);
	}, [isLeftPlayersTurn]);

	/**
	 * @brief Effect to update node visuals when node is selected.
	 * 1. Attacker can attack any node that is undefended.
	 * 2. Defender can only defend targeted nodes in the previous round.
	 * 3. If a node is defended, it stays defended throughout the game.
	 */
	useEffect(() => {
		console.log("Selected nodes:", selectedNodeIds);

		setDisplayedNodes((prevNodes) =>
			prevNodes.map((n, index) => {
				let includes = selectedNodeIds.has(n.id);
				return {
					...n,
					data: {
						...n.data,
						targeted: isEvilsTurn ? includes : n.data.targeted,
						defended: isEvilsTurn
							? n.data.defended
							: game.current.getGameState().vtxSafe[index] || includes,
					},
				};
			})
		);

		setInvalidSelectionNotice(false);
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
			setInvalidSelectionNotice(true);
		}
		if (game.current.checkForWinner()) {
			console.log("Winner is " + game.current.getGameState().winner);
			setGameEnd(true);
		}
	};

	/**
	 * @function handleNodeClick
	 * @brief Toggles the selection state of a node when clicked.
	 * 1. Attacker cannot select any node that is defended.
	 * 2. Defender cannot select any node that is NOT targeted in the immediate last turn.
	 * @param {React.MouseEvent} _ - The event object (not used).
	 * @param {Node} node - The node being clicked.
	 */

	const handleNodeClick: NodeMouseHandler = (_, node) => {
		setSelectedNodeIds((prevSelectedNodeIds) => {
			const newSelectedNodeIds = new Set(prevSelectedNodeIds);
			if (newSelectedNodeIds.has(node.id)) {
				newSelectedNodeIds.delete(node.id);
			} else if (
				(isEvilsTurn && !node.data.defended) ||
				(!isEvilsTurn && node.data.targeted)
			) {
				newSelectedNodeIds.add(node.id);
			}
			return newSelectedNodeIds;
		});
	};

	/**
	 * @var leftPlayerWon
	 * @brief True if game has ended and left player wins
	 */
	let leftPlayerWon =
		gameEnd &&
		((isEvilRole && game.current.getGameState().winner == "Attacker") ||
			(!isEvilRole && game.current.getGameState().winner == "Defender"));

	/**
	 * @brief Effect to recenter react flow graph when tutorial sidebar is opened or closed
	 */
	useEffect(() => {
		const timeout = setTimeout(() => {
			const fitViewButton = document.querySelector(
				".react-flow__controls-button:nth-child(3)"
			) as HTMLButtonElement;
			if (fitViewButton) {
				fitViewButton.click();
			}
		}, 100);
		return () => clearTimeout(timeout);
	}, [showTutorial]);

	return (
		<div className="game-page">
			{/* Left Section: Tutorial Page */}
			{showTutorial && (
				<div className="left-sidebar">
					<TutorialPage inSideBar={true} />
				</div>
			)}

			{/* Right Section: Game Area */}
			<div className="main-area">
				<Header {...GamePageHeader} />
				<div className="info-panels">
					<div className="info-panel">
						{(window.innerWidth >= 768 || isLeftPlayersTurn) && (
							<PlayerInfo
								playerName="Player&nbsp;1"
								isEvilRole={isEvilRole}
								glow={isLeftPlayersTurn}
								left={true}
								won={leftPlayerWon}
							/>
						)}
						{window.innerWidth >= 768 && (
							<Button
								label={`${showTutorial ? "Hide" : "Show"} Tutorial`}
								color="outline-secondary"
								onClick={() => setShowTutorial(!showTutorial)}
							/>
						)}
					</div>

					<div className="info-panel">
						{(window.innerWidth >= 768 || !isLeftPlayersTurn) && (
							<PlayerInfo
								playerName="Player&nbsp;2"
								isEvilRole={!isEvilRole}
								glow={!isLeftPlayersTurn}
								left={false}
								won={gameEnd && !leftPlayerWon}
							/>
						)}
					</div>
				</div>
				<div className="alert">
					{invalidSelectionNotice && (
						<Alert text="Your selection must be an independent set! See Tutorial Step 4." />
					)}
				</div>
				<Graph
					nodes={displayedNodes}
					edges={displayedEdges}
					handleNodeClick={handleNodeClick}
				/>
				<div className="btn-end-turn">
					{gameEnd ? (
						<p>{game.current.getGameState().winner + " is the Winner!"}</p>
					) : (
						<Button label="End Turn" color="warning" onClick={handleSubmit} />
					)}
				</div>
			</div>
		</div>
	);
};
export default GamePage;
