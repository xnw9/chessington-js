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
            // square in front
            let square = Square.at(current.row + 1, current.col)

            if (!this.checkEmptySquare(board, square)) {
                return []
            }

            available = this.canPawnBePutOn(board, square, available)

            if (!this.moved) {
                let square = Square.at(current.row + 2, current.col)
                available = this.canPawnBePutOn(board, square, available)
            }

            // diagonal square - if can take the piece on the square
            let squares = [Square.at(current.row + 1, current.col + 1), Square.at(current.row + 1, current.col - 1)]
            for (let i in squares) {
                if (this.checkTake(board, squares[i])) {
                    available.push(squares[i])
                }
            }


        }

        // BLACK
        if (this.player == Player.BLACK) {
            let square = Square.at(current.row - 1, current.col)

            if (!this.checkEmptySquare(board, square)) {
                return []
            }

            available = this.canPawnBePutOn(board, square, available)

            if (!this.moved) {
                let square = Square.at(current.row - 2, current.col)
                available = this.canPawnBePutOn(board, square, available)
            }

            // diagonal square - if can take the piece on the square
            let squares = [Square.at(current.row - 1, current.col + 1), Square.at(current.row - 1, current.col - 1)]
            for (let i in squares) {
                if (this.checkTake(board, squares[i])) {
                    available.push(squares[i])
                }

            }

        }

        return available

    }

}
