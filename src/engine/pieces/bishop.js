import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current = board.findPiece(this)
        let available = []

        // TODO: can be neater...
        let nums = [-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]

        for (let i in nums) {
            let j = nums[i]
            let square = Square.at(current.row + j, current.col + j)
            available = this.canBePutOn(board, square, available)
        }
        for (let i in nums) {
            let j = nums[i]
            let square = Square.at(current.row + j, current.col - j)
            available = this.canBePutOn(board, square, available)
        }

        return available

    }
}
