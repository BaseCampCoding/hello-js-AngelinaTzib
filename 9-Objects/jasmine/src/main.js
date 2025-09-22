// task 1 //
const scoreBoard = {"The Best Ever" : 1000000, "Kobe": 7000};


// task 2 //
let newPlayerName = 'Lebron';
let newPlayerScore = 5000;
scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard);


// task 3 //
let playerToRemove = 'The Best Ever';
delete scoreBoard[playerToRemove];
console.log(scoreBoard);


// task 4 //
let playerNameToUpdate = "Lebron";
let scoreToAdd = 1000;
scoreBoard[playerNameToUpdate] += scoreToAdd;
console.log(scoreBoard);


// // task 5 //
let mondayBonus = 100;
for (let player in scoreBoard){
    scoreBoard[player] += mondayBonus;
}
console.log(scoreBoard);