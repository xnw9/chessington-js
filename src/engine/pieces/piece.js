export default class Piece {
    constructor(player) {
        this.player = player;
        this.moved = 0
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
