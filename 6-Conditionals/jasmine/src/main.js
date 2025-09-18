// Task 1
let kind = 'car';
let needsLicenseResult;
if(kind == 'car' || kind == 'truck'){
    needsLicenseResult = true
}
else {
    needsLicenseResult = false
}


// Task 2
let option1 = 'Toyota';
let option2 = 'Honda';
// When comparing strings capitalization matters

let chooseVehicleResult;
if (option1 > option2){
    chooseVehicleResult = option2 + ' is clearly the better choice'
}
else{
    chooseVehicleResult = option1 + ' is clearly the better choice'

}
console.log(chooseVehicleResult);


// Task 3
let originalPrice = 10000;
let age = 5;
let calculateResellPriceResult;

if (age < 3){
    calculateResellPriceResult = originalPrice * 0.8;
}
else if(age > 10){
    calculateResellPriceResult = originalPrice * 0.5;
}
else{
    calculateResellPriceResult = originalPrice * 0.7;
}
console.log(calculateResellPriceResult)
// always test it multiple times

// optional to add a condition to the last one

//  else if(age >= 3 && age < 10)
//     calculateResellPriceResult = originalPrice * 0.7;

