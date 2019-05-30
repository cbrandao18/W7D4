let Board = require('./board.js');
class Game {
    
    constructor() {
        this.board = new Board();
    }

    run(reader, completionCallback) {
        while (!board.won()) {
            reader.question("X make your move", pos => { 
                this.board.place_mark(pos,'X')
                reader.question("Y make your move", pos => { this.board.place_mark(pos, 'Y') });
            });
        }
        reader.close();
        // reader.question("Y make your move", pos => { this.board.place_mark(pos,'Y')});
    }
}

module.exports = Game;