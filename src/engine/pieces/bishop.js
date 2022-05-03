import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';
import Player from "../player";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current = board.findPiece(this)
        let available = []

        // TODO: can be neater...
        // start from current position
        let negs = [-1, -2, -3, -4, -5, -6, -7]
        let poss = [1, 2, 3, 4, 5, 6, 7]

        for (let i in negs) {
            let j = negs[i]
            let square = Square.at(current.row + j, current.col + j)
            if (!this.checkEmptySquare(board, square)) {
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
                break
            }
            available.push(square)

        }
        for (let i in negs) {
            let j = negs[i]
            let square = Square.at(current.row + j, current.col - j)
            if (!this.checkEmptySquare(board, square)) {
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
                break
            }
            available.push(square)
        }

        for (let i in poss) {
            let j = poss[i]
            let square = Square.at(current.row + j, current.col + j)
            if (!this.checkEmptySquare(board, square)) {
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
                break
            }
            available.push(square)

        }
        for (let i in poss) {
            let j = poss[i]
            let square = Square.at(current.row + j, current.col - j)
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
