import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current = board.findPiece(this)
        let available = []

        // vertical
        for (let row = 0; row < 8; row++) {
            let col = current.col
            let square = Square.at(row, col)

            if (square.row != current.row) {        // not including itself
                if (board.checkOccupancy(square)) {         // stop as soon as meeting another piece
                    break
                }
                available.push(square)          // otherwise valid move
            }
        }

        // horizontal
        for (let col = 0; col < 8; col++) {
            let row = current.row
            let square = Square.at(row, col)

            if (square.col != current.col) {
                if (board.checkOccupancy(square)) {
                    break
                }
                available.push(square)
            }

        }

        return available


    }
}
