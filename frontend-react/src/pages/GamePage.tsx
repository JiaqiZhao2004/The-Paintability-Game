import Graph from "../components/Graph";

const GamePage = () => {
	return (
		<Graph
			adjacencyMatrix={[
				[0, 0, 0, 1, 1, 1],
				[0, 0, 0, 1, 1, 1],
				[0, 0, 0, 1, 1, 1],
				[1, 1, 1, 0, 0, 0],
				[1, 1, 1, 0, 0, 0],
				[1, 1, 1, 0, 0, 0],
			]}
		/>
	);
};
export default GamePage;
