function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceImages = document.getElementById("diceImage");
    const diceResult = document.getElementById("diceResult");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.PNG">`)
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}