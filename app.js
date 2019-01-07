let turnFlag = true;
for (let i = 1; i <= 9; i++) {
	$(`.game-square${i}`).click(function() {
		if (turnFlag) {
			$(`.game-square${i}`).append(
				'<img class ="x" src="./images/X.png">'
			);
			$(`.game-square${i}`).off();
			turnFlag = false;
		} else {
			$(`.game-square${i}`).append(
				'<img class ="o" src="./images/O.png">'
			);
			$(`.game-square${i}`).off();
			turnFlag = true;
		}
	});
}
