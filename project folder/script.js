// Initialize the Chessboard when page loads
document.addEventListener("DOMContentLoaded", function() {
    var boardConfig = {
        draggable: true,
        dropOffBoard: 'trash', // Pieces will be trashed when dropped off the board
        sparePieces: true // Generate spare pieces below the board
    };

    var board = Chessboard('myBoard', boardConfig); // Create Chessboard
});

// Define the function to show student options
function showStudentOptions() {
    // Hide the login buttons and show the game options
    document.getElementById("login").style.display = "none";
    document.getElementById("game-options").style.display = "block";
}

// You can add more functions for other buttons or game modes here...
