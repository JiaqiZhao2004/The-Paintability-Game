import { useEffect, useState } from "react";
import Graph from "../components/Graph";

const GamePage = () => {
	const [adjacencyMatrix, setAdjacencyMatrix] = useState([[]]);

	// Get initial random graph
	useEffect(() => {
		const fetchRandomAdjMat = async () => {
			try {
				const result = await fetch(
					"http://localhost:5173/mockAdjacencyMatrix.json"
				);
				const jsonResult = await result.json();
				console.log("Fetched adjacency matrix:", jsonResult); // Add this line for debugging
				setAdjacencyMatrix(jsonResult);
			} catch (error) {
				console.error("Error fetching adjacency matrix:", error);
			}
		};
		fetchRandomAdjMat();
	}, []); // empty brackets []: only run once, when page is rendered

	return <Graph adjacencyMatrix={adjacencyMatrix} />;
};
export default GamePage;
