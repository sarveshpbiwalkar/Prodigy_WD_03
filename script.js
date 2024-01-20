let board = Array(9).fill(null);
let currentPlayer = 'X';
let user1 = document.getElementById('user1Name').value;
let user2 = document.getElementById('user2Name').value;

function validateInput(event) {
    user1 = document.getElementById('user1Name').value;
    user2 = document.getElementById('user2Name').value;
    if (user1.length < 3 || user2.length < 3) {
        alert("User name must be at least 3 characters long.");
        event.preventDefault();
    } 
}

function makeMove(index) {
    if (board[index] === null) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (
            board[a] && board[a] === board[b] && board[a] === board[c] ) {
            if(board[a] === 'X'){
                document.getElementById('result').innerHTML ='Congratulations '+ user1 +'! you won!';
            } else {
                document.getElementById('result').innerHTML ='Congratulations '+ user2 +'! you won!';
            }
        }
    }

    if (!board.includes(null)) {
        alert('It\'s a tie!');
        location.reload();
    }
}
function reset(){
    location.reload();
}