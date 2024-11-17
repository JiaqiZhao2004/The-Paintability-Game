class PaintGraph {
	private vtxList: number[];
	private adjMat: number[][];
	private vtxSafe: boolean[];
	private vtxAttack: boolean[];
	private gameOver: boolean;
	private winner: string;

	public constructor(vL: number[], aM: number[][]) {
		this.vtxList = vL;
		const n: number = this.vtxList.length;
		this.adjMat = aM.map((row) => [...row]);
		this.vtxSafe = [];
		this.vtxAttack = [];
		this.gameOver = false;
		this.winner = "";
		for (let i = 0; i < n; i++) {
			let temp: number[] = [];
			for (let j = 0; j < aM[i].length; j++) {
				temp.push(aM[i][j]);
			}
			this.adjMat.push(temp);
			this.vtxSafe.push(false);
			this.vtxAttack.push(false);
		}
	}

	public getGraph(): number[][] {
		return this.adjMat;
	}

	public getList(): number[] {
		return this.vtxList;
	}

	public isEdge(i: number, j: number): boolean {
		if (i > -1 && i < this.adjMat.length) {
			if (j > -1 && j < this.adjMat[i].length) {
				if (this.adjMat[i][j] > 0) {
					return true;
				}
			}
		}
		return false;
	}

	public attack(atkArr: number[]) {
		for (let i = 0; i < atkArr.length; i++) {
			if (i < this.vtxList.length && this.vtxSafe[i] == false) {
				this.vtxAttack[i] = true; // changed from this.vtxAttack = true to this.vtxAttack[i] = true
			}
		}
	}
	public defend(defArr: number[]): boolean {
		let isValid = true;

		for (let i = 0; i < defArr.length; i++) {
			for (let j = 0; j < defArr.length; j++) {
				if (this.isEdge(defArr[i], defArr[j])) {
					isValid = false;
					break;
				}
			}
		}
		if (!isValid) {
			return false;
		} else {
			defArr.forEach((i) => {
				if (i < this.vtxList.length && this.vtxAttack[i]) {
					this.vtxSafe[i] = true;
					this.vtxAttack[i] = false;
				}
			});
			this.vtxAttack.forEach((isAttacked, i) => {
				if (isAttacked) {
					this.vtxList[i] -= -1;
					this.vtxAttack[i] = false;
				}
			});
			return true;
		}
	}

	public checkForWinner(): boolean {
		// attacker wins if a vertex health reaches zero or below
		if (this.vtxList.some((health) => health <= 0)) {
			this.winner = "Attacker";
			this.gameOver = true;
			return true;
		}

		// defender win if all vert are safe
		if (this.vtxSafe.every((safe) => safe)) {
			this.winner = "Defender";
			this.gameOver = true;
			return true;
		}
		return false;
	}

	public getGameState() {
		return {
			vtxList: this.vtxList,
			vtxSafe: this.vtxSafe,
			vtxAttack: this.vtxAttack,
			gameOver: this.gameOver,
			winner: this.winner,
		};
	}
}
const crimeAttempt = (id: string, jailCount: { [key: string]: number }) => {
	let updatedJailCount: { [key: string]: number } = {};
	for (const key in jailCount) {
		updatedJailCount[key] = jailCount[key];
	}
	if (updatedJailCount.hasOwnProperty(id)) {
		updatedJailCount[id] += 1; // if id exists icnrease by 1
	} else {
		updatedJailCount[id] = 1;
	}
	return updatedJailCount;
};

const turnChange = (currentTurn: "Good" | "Evil"): "Good" | "Evil" => {
	return currentTurn === "Good" ? "Evil" : "Good";
};

export default PaintGraph;
