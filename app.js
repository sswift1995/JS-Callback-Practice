class Casino {
    constructor(name){
        this.name = name;
        this.timesPlayed = 0;
    }
    playGame(betAmount) {
        this.timesPlayed += 1;
        let outcome = Math.random();
        if (outcome <= 0.5) {
            console.log("The casino wins!");
        } else {
            let winnings = betAmount * (this.timesPlayed + 1);
            console.log(`Player wins ${winnings}!`);
        }
    }
}


// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(10);// Player wins 20! or "The casino wins!"
myCasino.playGame(10);  // Player wins 30! or "The casino wins!"
myCasino.playGame(10);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
