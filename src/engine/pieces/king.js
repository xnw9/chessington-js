import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current = board.findPiece(this)
        let available = []

        let nums = [-1, 0, 1]

        for (let i in nums) {
            for (let j in nums) {
                if (nums[i] == 0 && nums[j] == 0) {          // not to include current position
                    continue
                }
                let square = Square.at(current.row + nums[i], current.col + nums[j])
                available = this.canBePutOn(board, square, available)
            }
        }

        return available
    }
}
