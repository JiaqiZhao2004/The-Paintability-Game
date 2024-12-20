export function randomGraph(n: number, p: number): number[][] {
	let output: number[][] = [];
	for (let i = 0; i < n; i++) {
		let temp: number[] = [];
		for (let j = 0; j < n; j++) {
			temp.push(0);
		}
		output.push(temp);
	}
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			let x: number = Math.random();
			if (x < p) {
				output[i][j] = 1;
				output[j][i] = 1;
			}
		}
	}
	return output;
}

export function randomList(
	adjMat: number[][],
	n: number,
	difficulty: number
): number[] {
	let output: number[] = [];
	for (let i = 0; i < n; i++) {
		let deg: number = 1;
		for (let j = 0; j < n; j++) {
			if (adjMat[i][j] > 0 && Math.random() > difficulty) {
				deg = deg + 1;
			}
		}
		output.push(deg);
	}

	// ensure no two connected health 1 nodes
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (adjMat[i][j] > 0 && output[i] == 1 && output[j] == 1) output[i] += 1;
		}
	}

	return output;
}
