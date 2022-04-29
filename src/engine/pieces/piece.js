export default class Piece {
    constructor(player) {
        this.player = player;
        this.moved = 0              // but only for pawn
    }

    // check if the piece can be placed on this square on this board
    // if so, push the square into available move list
    canBePutOn(board, square, available) {
        if (board.checkWithin(square)) {        // square is within the board
            if (!board.checkOccupancy(square)) {        // square is empty
                available.push(square)
            }
        }
        return available
    }

    verifyPutOn(board, square) {
        if (board.checkWithin(square)) {        // square is within the board
            if (!board.checkOccupancy(square)) {        // square is empty
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
