let move = true;
let winner = [];
let x = -1;
let o = 1;
for (let i = 1; i <= 9; i++) {
	$(`.game-square${i}`).click(function() {
		if (move) {
			$(`.game-square${i}`).append(
				'<img class ="x" src="./images/X.png">'
			);
			winner[parseInt($(`.game-square${i}`).attr('id'))] = x;
			$(`.game-square${i}`).off();
			move = false;
		} else {
			$(`.game-square${i}`).append(
				'<img class ="o" src="./images/O.png">'
			);
			winner[parseInt($(`.game-square${i}`).attr('id'))] = o;
			$(`.game-square${i}`).off();
			move = true;
		}
		console.log(winner);
		setTimeout(function() {
			if (winner[0] === -1 && winner[1] === -1 && winner[2] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[3] === -1 && winner[4] === -1 && winner[5] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[6] === -1 && winner[7] === -1 && winner[8] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[0] === -1 && winner[3] === -1 && winner[6] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[1] === -1 && winner[4] === -1 && winner[7] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[2] === -1 && winner[5] === -1 && winner[8] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[0] === -1 && winner[4] === -1 && winner[8] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[2] === -1 && winner[4] === -1 && winner[6] === -1) {
				alert(
					' X wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[0] === 1 && winner[1] === 1 && winner[2] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[3] === 1 && winner[4] === 1 && winner[5] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[6] === 1 && winner[7] === 1 && winner[8] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[0] === 1 && winner[3] === 1 && winner[6] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[1] === 1 && winner[4] === 1 && winner[7] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[2] === 1 && winner[5] === 1 && winner[8] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[0] === 1 && winner[4] === 1 && winner[8] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner[2] === 1 && winner[4] === 1 && winner[6] === 1) {
				alert(
					' O wins! \n Hit the Play Again button in the top left corner, to play again!'
				);
			}
			if (winner.length === 9 && !winner.includes(undefined)) {
				alert("It's a draw!");
			}
		}, 100);
	});
}

$('.reset').click(function() {
	$('.game-square').empty();
});
