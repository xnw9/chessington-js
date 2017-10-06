import Piece from './piece';
import Square from '../../../src/engine/square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current = board.findPiece(this)
        let available = []

        // vertical: current to bottom
        for (let row = current.row - 1; row >= -1; row--) {
            let col = current.col
            let square = Square.at(row, col)

            if (!this.checkEmptySquare(board, square)) {         // stop as soon as meeting another piece / out of board
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
                break
            }
            available.push(square)

        }
        // vertical: current to top
        for (let row = current.row + 1; row <= 8; row++) {
            let col = current.col
            let square = Square.at(row, col)

            if (!this.checkEmptySquare(board, square)) {
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
                break
            }
            available.push(square)
        }


        // horizontal: current to left
        for (let col = current.col - 1; col >= -1; col--) {
            let row = current.row
            let square = Square.at(row, col)

            if (!this.checkEmptySquare(board, square)) {
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
                break
            }
            available.push(square)

        }
        // horizontal: current to right
        for (let col = current.col + 1; col <= 8; col++) {
            let row = current.row
            let square = Square.at(row, col)

            if (!this.checkEmptySquare(board, square)) {
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
                break
            }
            available.push(square)
        }

        return available


    }
}
