function rollDice() {
    var dice = ["bau", "cua", "tom", "ca", "nai", "ga"];
    var randomIndex = Math.floor(Math.random() * dice.length);
    var result = dice[randomIndex];

    var diceImages = document.getElementsByClassName("dice");
    for (var i = 0; i < diceImages.length; i++) {
        diceImages[i].classList.remove("highlight");
    }

    var diceElement = document.getElementById(result);
    diceElement.classList.add("highlight");
}