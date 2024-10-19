import { useEffect, useState } from "react";

const useFetchAdjacencyMatrix = (
	url: string
): [number[][], React.Dispatch<React.SetStateAction<number[][]>>] => {
	const [matrix, setMatrix] = useState<number[][]>([[]]);

	useEffect(() => {
		const fetchMatrix = async () => {
			try {
				const result = await fetch(url);
				const jsonResult = await result.json();
				console.log("Fetched adjacency matrix:", jsonResult); // Add this line for debugging
				setMatrix(jsonResult);
			} catch (error) {
				console.error("Error fetching adjacency matrix:", error);
			}
		};
		fetchMatrix();
	}, [url]);
	return [matrix, setMatrix];
};

export default useFetchAdjacencyMatrix;
