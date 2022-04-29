import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // equivalent to rook + bishop
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

        let nums = [-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]

        // first and third quadrant
        for (let i in nums) {
            let j = nums[i]
            let square = Square.at(current.row + j, current.col + j)
            available = this.canBePutOn(board, square, available)
        }

        //second and fourth quadrant
        for (let i in nums) {
            let j = nums[i]
            let square = Square.at(current.row + j, current.col - j)
            available = this.canBePutOn(board, square, available)
        }

        return available
    }
}
