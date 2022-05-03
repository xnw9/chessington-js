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
            } else {
                if (this.checkTake(board, square)) {
                    available.push(square)
                }
            }
        }
        return available
    }

    canPawnBePutOn(board, square, available) {
        if (board.checkWithin(square)) {        // square is within the board
            if (!board.checkOccupancy(square)) {        // square is empty
                available.push(square)
            }
        }
        return available
    }

    checkTake(board, square) {
        let anotherPiece = board.getPiece(square)

        if (anotherPiece.constructor.name == "King") {
            return false
        }
        if (this.player == anotherPiece.player) {
            return false
        }
        return true
    }

    verifyPutOn(board, square) {
        if (board.checkWithin(square)) {        // square is within the board
            if (!board.checkOccupancy(square)) {        // square is empty
                return true
            }
        }
        return false
    }

    // combination of verify: two outputs, canBePutOn & take
    // checkWithin true + checkOccupancy false = true, false
    // checkWithin true + checkOccupancy true + take true = true, true
    // checkWithin true + checkOccupancy true + take false = false, false

    verifyPlace(board, square) {
        if (board.checkWithin(square)) {
            if (!board.checkOccupancy(square)) {            // empty square
                return [true, false]
            } else {
                if (this.checkTake(square)) {               // if can take the piece on the square
                    return [true, true]
                }
            }
        }
        return [false, false]
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.moved = this.moved + 1     // if only required for pawn, maybe only add to pawn's function?
    }

    canTake(board, square) {
        if (!board.checkOccupancy(square)) {
            return false
        }

        if (this.player == board.getPiece(square).player) {
            return false
        }

        return true
    }

    // need to consider about occupied squares
    //      so function to verify if it is capturable (opposed piece is not a king / they are on opposite side)
    //      if so, add it into available moves
    //      move the piece as usual
    // piece.function(square) -> true (piece can take the piece on square)
    //      another-piece = board.getPiece(square)
    //      piece.player == another-piece.player
    //      another-piece.type == king
    //      then return false. otherwise true
    // if square is in route && square.occupancy is true && piece.function(square) is true
    //      add square to available moves
    //      still need to remove piece from square before putting?!
    // verifyCanPut -> if false, canTake -> if true, add square to available and break
    //                                  -> if false, break

    // write test for different pieces
}
