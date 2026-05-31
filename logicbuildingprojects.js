let secret = 57;
for (let i = 1; i <= 7; i++) {
    let guess = Number(prompt("Attempt" + " " + i  + " " + ":Guess the number"));
    if (guess === secret) {
        alert("Correct! You guessed it in" + " " + i + " " + "attempts");
        break;
    } else if (guess < secret) {
        alert("Too small!");
    }
        else {
            alert("Too large!");
        }
    if (i === 7) {
        alert("Game over! The number was" + " " + secret);
        break;
    }
}