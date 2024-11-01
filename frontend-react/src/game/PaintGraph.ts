class PaintGraph{
    private vtxList: number[];
    private adjMat: number[][];
    private vtxSafe: boolean[];
    private vtxAttack: boolean[];
    private gameOver: boolean;
    private winner: string;
 
    public constructor(vL: number[], aM: number[][]){
        const n: number = vtxList.length;
        this.vtxList = [];
        this.adjMat = [][];
        this.vtxSafe = [];
        this.vtxAttack = [];
        this.gameOver = false;
        this.winner = "";
        for(let i=0; i<n; i++){
            this.vtxList.push(vL[i])
            let temp: number[] = [];
            for(let j=0; j<aM[i].length; j++){
                temp.push(aM[i][j]);
            }
            this.adjMat.push(temp);
            this.vtxSafe.push(false);
            this.vtxAttack.push(false);
        }
 
    }
 
    public getGraph(): number[][]{
        return this.AdjMat;
    }
 
    public getList(): number[]{
        return this.vtxList;
    }
 
    public isEdge(i: number, j: number): boolean{
        if(i > -1 && i < this.adjMat.length){
            if(j > -1 && j < this.adjMat[i].length){
                if(this.adjMat[i][j] > 0){
                    return true;
                }
            }
        }
        return false;
    }
 
    public attack(atkArr: number[]){
        for(let i=0; i<atkArr.length; i++){
            if(i < this.vtxList.length && this.vtxSafe[i] == false){
                this.vtxAttack = true;
            }
        }
    }
 
 }