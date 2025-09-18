// instructions
let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;


// task 1
let canExecuteFastAttack = !knightIsAwake;
console.log('Fast Attack: ' + canExecuteFastAttack);
// false


// task 2
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;
console.log('Spy: ' + canSpy)
// true


// task 3
let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log('Signal Prisoner: ' + canSignalPrisoner)
// true


// task 4
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || 
(!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
console.log('Free Prisoner: ' + canFreePrisoner);
// true