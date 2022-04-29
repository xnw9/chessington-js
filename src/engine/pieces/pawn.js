import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';
import {showDiff} from "chai/lib/chai/config";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board, moved) {
        let available = []
        let current = board.findPiece(this)
        // add this.moved in piece - # of moves

        // WHITE
        if (this.player == Player.WHITE) {

            let square = Square.at(current.row + 1, current.col)

            if (!this.verifyPutOn(board, square)) {             // if blocker in front, cannot make any move
                return []
            }

            available = this.canBePutOn(board, square, available)           // otherwise record this move
            // a bit repeated

            if (!this.moved) {          // first move - so verify if can move two squares
                let square = Square.at(current.row + 2, current.col)
                available = this.canBePutOn(board, square, available)
            }

        }

        // BLACK
        if (this.player == Player.BLACK) {
            let square = Square.at(current.row - 1, current.col)

            if (!this.verifyPutOn(board, square)) {
                return []
            }

            available = this.canBePutOn(board, square, available)

            if (!this.moved) {
                let square = Square.at(current.row - 2, current.col)
                available = this.canBePutOn(board, square, available)
            }

        }

        return available

    }
}
