/**
 * @deprecated This hook is no longer used. Fetching vertex health is done by PaintGraph.ts
 */

import { useEffect, useState } from "react";

const useFetchVertexHealthList = (
	url: string
): [number[], React.Dispatch<React.SetStateAction<number[]>>] => {
	const [vertexHealthList, setVertexHealthList] = useState<number[]>([]);
	
	useEffect(() => {
		const fetchVertexHealthList = async () => {
			try {
				const result = await fetch(url);
				const jsonResult = await result.json();
				console.log("Fetched vertex health list:", jsonResult);
				setVertexHealthList(jsonResult);
			} catch (error) {
				console.error("Error fetching vertex health list:", error);
			}
		};
		fetchVertexHealthList();
	}, [url]);
	return [vertexHealthList, setVertexHealthList];
};

export default useFetchVertexHealthList;
