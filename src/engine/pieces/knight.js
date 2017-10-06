import Piece from './piece';
import Square from '../../../src/engine/square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current = board.findPiece(this)
        let available = []

        let nums1 = [-1, 1]
        let nums2 = [-2, 2]

        // make knight move (is already able to jump over other pieces)
        for (let i in nums1) {
            for (let j in nums2) {
                let square = Square.at(current.row + nums1[i], current.col + nums2[j])
                available = this.canBePutOn(board, square, available)
            }
        }
        // TODO: repeated code, can be improved
        for (let i in nums2) {
            for (let j in nums1) {
                let square = Square.at(current.row + nums2[i], current.col + nums1[j])
                available = this.canBePutOn(board, square, available)
            }
        }
        return available
    }
}
