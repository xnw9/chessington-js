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
            if (!board.checkOccupancy(square) && square.row != current.row) {   // not to include current position
                available.push(square)
            }
        }

        // horizontal
        for (let col = 0; col < 8; col++) {
            let row = current.row
            let square = Square.at(row, col)
            if (!board.checkOccupancy(square) && square.col != current.col) {
                available.push(square)
            }
        }

        return available


    }
}
