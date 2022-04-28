import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';
import {showDiff} from "chai/lib/chai/config";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board, moved) {
        let thisBoard = board.showBoard()
        let available = []
        // add this.moved in piece - # of moves

        // WHITE
        if (this.player == Player.WHITE) {
            // can only move one square up if they have moved
            if (this.moved) {
                let current = board.findPiece(this)
                return [Square.at(current.row+1, current.col)]
            }

            // can move one or two squares up on their first move
            if (this.moved == 0) {
                let current = board.findPiece(this)
                return [Square.at(current.row+1, current.col), Square.at(current.row+2, current.col)]
            }
        }

        // BLACK
        if (this.player == Player.BLACK) {
            // can only down one square up if they have moved
            if (this.moved) {
                let current = board.findPiece(this)
                return [Square.at(current.row-1, current.col)]
            }

            // can down one or two squares up on their first move
            if (this.moved == 0) {
                let current = board.findPiece(this)
                return [Square.at(current.row-1, current.col), Square.at(current.row-2, current.col)]
            }
        }

        for (let row = 0; row < thisBoard.length; row++) {
            for (let col = 0; col < thisBoard.length; col++) {
                if (!thisBoard[row][col]) {
                    available.push(Square.at(row, col))
                }
            }
        }
        return available
    }
}
