import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // TODO: equivalent to rook + bishop
        let current = board.findPiece(this)
        let available = []

        // "rook"
        // vertical: current to bottom
        for (let row = current.row-1; row >=-1; row--) {
            let col = current.col
            let square = Square.at(row, col)

            if (!this.verifyPutOn(board, square)) {         // stop as soon as meeting another piece / out of board
                break
            }
            available.push(square)          // otherwise valid move

        }
        // vertical: current to top
        for (let row = current.row+1; row < 9; row++) {
            let col = current.col
            let square = Square.at(row, col)

            if (!this.verifyPutOn(board, square)) {         // stop as soon as meeting another piece / out of board
                break
            }
            available.push(square)          // otherwise valid move
        }


        // horizontal: current to left
        for (let col = current.col-1; col >= -1; col--) {
            let row = current.row
            let square = Square.at(row, col)

            if (!this.verifyPutOn(board, square)) {         // stop as soon as meeting another piece / out of board
                break
            }
            available.push(square)          // otherwise valid move

        }
        // horizontal: current to right
        for (let col = current.col+1; col < 9; col++) {
            let row = current.row
            let square = Square.at(row, col)

            if (!this.verifyPutOn(board, square)) {         // stop as soon as meeting another piece / out of board
                break
            }
            available.push(square)          // otherwise valid move
        }

        // "bishop"
        let negs = [-1, -2, -3, -4, -5, -6, -7]
        let poss = [1, 2, 3, 4, 5, 6, 7]

        for (let i in negs) {
            let j = negs[i]
            let square = Square.at(current.row + j, current.col + j)
            if (!this.verifyPutOn(board, square)) {
                break
            }
            available.push(square)
            // available = this.canBePutOn(board, square, available)
        }
        for (let i in negs) {
            let j = negs[i]
            let square = Square.at(current.row + j, current.col - j)
            if (!this.verifyPutOn(board, square)) {
                break
            }
            available.push(square)
            // available = this.canBePutOn(board, square, available)
        }

        for (let i in poss) {
            let j = poss[i]
            let square = Square.at(current.row + j, current.col + j)
            if (!this.verifyPutOn(board, square)) {
                break
            }
            available.push(square)
            // available = this.canBePutOn(board, square, available)
        }
        for (let i in poss) {
            let j = poss[i]
            let square = Square.at(current.row + j, current.col - j)
            if (!this.verifyPutOn(board, square)) {
                break
            }
            available.push(square)
            // available = this.canBePutOn(board, square, available)
        }

        return available
    }
}
