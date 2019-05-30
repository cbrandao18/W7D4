class Board{
    constructor() {
        this.grid = this._makeGrid();
        console.log('hi');
    }
    
    _makeGrid() {
        const grid = [];
        for (let i=0; i<3; i++){
            grid.push([' ', ' ', ' ']);
        }
        return grid;
    }

    // output the grid to the console
    print(){
        for (let i=0; i<this.grid.length; i++){
            console.log(this.grid[i]);
        }
    }

    won() {
        if (this.horizWin('X') || this.vertWin('X') || this.diagWin('X')) {
            this.winner('X');
            return true;
        } else if (this.horizWin('O') || this.vertWin('O') || this.diagWin('O')) {
            this.winner('O');
            return true;
        } else {
            return false;
        }
    }

    posEqualMark(cell, mark) {
    return cell === mark;
    }

    horizWin(mark) {
        for (let i=0; i<3; i++) {
            let row = this.grid[i];
            if (row.every(cell => this.posEqualMark(cell, mark))) {
                return true;            
            }
        }
        return false;
    }

    vertWin(mark) {
        for (let i=0; i<3; i++) {
            let mark1 = this.grid[0][i];
            let mark2 = this.grid[1][i];
            let mark3 = this.grid[2][i];
            if (mark1 === mark && mark2 === mark && mark3 === mark){
                return true;
            }
        }
        return false;
    }

    diagWin(mark) {
        let diag1 = [[0,0], [1,1], [2,2]];
        let diag2 = [[0,2], [1,1], [2,0]];
        if (diag1.every(pos => this.grid[pos[0]][pos[1]] === mark)){
            return true;
        }

        if (diag2.every(pos => this.grid[pos[0]][pos[1]] === mark)) {
            return true;
        }
        return false;
    }

    winner(mark) {
        console.log(`${mark} has won the game!`);
    }

    empty(pos) {
        if (this.grid[pos[0]][pos[1]] === ' ') {
            return true;
        } else {
            return false;
        }
    }
    
    place_mark(pos, mark) {
        this.grid[pos[0]][pos[1]] = mark;
        this.won();
    }
}

module.exports = Board;

// let b = new Board;
// b.place_mark([0,2], "X");
// b.place_mark([1,1], "X");
// b.place_mark([2,0], "X");
// b.print();
// console.log(b.won());