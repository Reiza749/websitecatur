const chessboard = document.getElementById("chessboard");

// Chess pieces (simplified using Unicode symbols)
const pieces = {
    black: ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜", "♟"],
    white: ["♙", "♘", "♗", "♕", "♔", "♗", "♘", "♖", "♙"],
};

// Initialize the board
function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add((row + col) % 2 === 0 ? "white" : "black");
            square.dataset.row = row;
            square.dataset.col = col;

            // Place pieces
            if (row === 0) square.textContent = pieces.black[col];
            if (row === 1) square.textContent = pieces.black[8];
            if (row === 6) square.textContent = pieces.white[8];
            if (row === 7) square.textContent = pieces.white[col];

            square.classList.add("piece");
            square.addEventListener("click", selectPiece);

            chessboard.appendChild(square);
        }
    }
}

let selectedSquare = null;

function selectPiece(event) {
    const square = event.target;

    if (selectedSquare) {
        // Move piece
        if (square !== selectedSquare) {
            square.textContent = selectedSquare.textContent;
            selectedSquare.textContent = "";
        }
        selectedSquare.classList.remove("selected");
        selectedSquare = null;
    } else {
        // Select a piece
        if (square.textContent) {
            selectedSquare = square;
            selectedSquare.classList.add("selected");
        }
    }
}

createBoard();