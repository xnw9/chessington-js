import Piece from './piece';
import Square from 'C:/Work/Training/chessington-js/src/engine/square';
import {showDiff} from "chai/lib/chai/config";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let thisBoard = board.showBoard()
        let available = []

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
