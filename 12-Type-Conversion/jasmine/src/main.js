// task 1 //
let digit1 = [1, 7, 3] //173
let digit2 = [2, 4, 8] //248
let number1 = Number(digit1.join(""));
let number2 = Number(digit2.join(""));
let twoSum = number1 + number2;


// task 2 //
let luckyInput = 12321;
let luckyInputStr = String(luckyInput);
let luckyNumber = luckyInputStr.split('').reverse().join('') == luckyInputStr
console.log(luckyNumber);


// task 3 //
let userInput = '1';
let errorMessage;

if(userInput == undefined || userInput == null || userInput == ''){
    errorMessage = 'required field'
}
else if(Number(userInput) == 0 || isNaN(Number(userInput))){
    errorMessage = "Must be a number besides 0";
}
else{
    errorMessage = ""
}
console.log(errorMessage)