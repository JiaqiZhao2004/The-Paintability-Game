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

export function randomList(adjMat: number[][], n: number): number[] {
	let output: number[] = [];
	for (let i = 0; i < n; i++) {
		let deg: number = 0;
		for (let j = 0; j < n; j++) {
			if (adjMat[i][j] > 0) {
				deg = deg + 1;
			}
		}
		let x: number = Math.random();
		if (x < 0.33333) {
			if (deg > 0) {
				deg = deg - 1;
			}
		}
		if (x > 0.66667) {
			deg = deg + 1;
		}
		output.push(deg);
	}
	return output;
}
