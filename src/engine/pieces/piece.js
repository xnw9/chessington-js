import Player from "../player";

export default class Piece {
    constructor(player) {
        this.player = player;
        this.moved = 0              // but only for pawn
    }

    // check if the piece can be placed, for knight, king (discrete positions)
    // if so, push the square into available move list
    canBePutOn(board, square, available) {
        if (board.checkWithin(square)) {        // square is within the board
            if (!board.checkOccupancy(square)) {        // square is empty
                available.push(square)
            } else {
                if (this.checkTake(board, square)) {          // if square is not empty but the piece on the square can be taken
                    available.push(square)
                }
            }
        }
        return available
    }


    // similar, but does not include piece-capturing, for pawn
    // since the rule is different
    canPawnBePutOn(board, square, available) {
        if (board.checkWithin(square)) {
            if (!board.checkOccupancy(square)) {
                available.push(square)
            }
        }
        return available
    }

    // check if the piece on the square can be taken: not king & different colour
    checkTake(board, square) {
        if (!board.checkOccupancy(square)) {
            return false
        }

        let anotherPiece = board.getPiece(square)

        if (anotherPiece.constructor.name == "King" || this.player == anotherPiece.player) {
            return false
        }

        return true
    }

    // for rook, bishop, queen (those need to stop right before or at the position of the existing piece on the square)
    // functions in their classes will use loop to record the moves
    checkEmptySquare(board, square) {
        if (board.checkWithin(square)) {
            if (!board.checkOccupancy(square)) {
                return true
            }
        }
        return false
    }


    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.moved = this.moved + 1     // if only required for pawn, maybe only add to pawn's function?
    }


}
