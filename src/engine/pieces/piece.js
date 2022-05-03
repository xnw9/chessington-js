import Player from "../player";

export default class Piece {
    constructor(player) {
        this.player = player;
        this.moved = 0              // but only for pawn
    }

    // check if the piece can be placed, for knight, king (discrete positions)
    // if so, push the square into available move list
    canBePutOn(board, square, available) {          //
        if (board.checkWithin(square)) {        // square is within the board
            if (!board.checkOccupancy(square)) {        // square is empty
                available.push(square)
            } else {
                if (this.checkTake(board, square)) {          // if not empty but the piece on the square can be taken
                    available.push(square)
                }
            }
        }
        return available
    }
    

    // similar, but does not include piece-capturing, for pawn
    canPawnBePutOn(board, square, available) {
        if (board.checkWithin(square)) {
            if (!board.checkOccupancy(square)) {
                available.push(square)
            }
        }
        return available
    }

    // check if the piece on the square can be taken
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

    checkPawnTake(board, square) {
        if (!board.checkOccupancy(square)) {
            return false
        }

        if (this.player == board.getPiece(square).player) {
            return false
        }

        let current = board.findPiece(this)

        if (this.player == Player.WHITE) {
            if (square.row == current.row + 1 && Math.abs(square.col - current.col)==1) {
                return true
            }
            return false
        }
        if (this.player == Player.BLACK) {
            if (square.row == current.row - 1 && Math.abs(square.col - current.col)==1) {
                return true
            }
            return false
        }
    }

    // for rook, bishop, queen (need to stop right before or at the position of the existing piece on the square)
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
