// Task 1
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let position = 5;
let getItemResult = stack[position];
console.log(getItemResult);


// Task 2
position = 6;
let replacementCard = 17;
stack[position] = replacementCard;
console.log(stack[6]);


// Task 3
let newCardTop = 25;
stack.unshift(newCardTop);
console.log(stack);


// Task 4
position = 8;
stack.splice(position, 1);
// splice takes in 2 arguments
console.log(stack);


// Task 5
stack.shift();
// shift will automatically take out position 0
console.log(stack);


// Task 6
let newCardBotom = 18;
stack.push(newCardBotom);
console.log(stack);


// Task 7
stack.pop();
// if you call a list pop will take the last one out
console.log(stack);


// Task 8
let stackSize = 9;

// One way to check if its true or false:

// let checkSizeOfStackResult
// if(stackSize == stack.length){
// checkSizeOfStackResult = true;}
// else {
//     checkSizeOfStackResult = false;
// }

// Another way to check:

let checkSizeOfStackResult = stack.length == stackSize;
console.log(checkSizeOfStackResult);