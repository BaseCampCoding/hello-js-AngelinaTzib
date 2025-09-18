// instructions
let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;



// task 1
let canExecuteFastAttack = !knightIsAwake;


// task 2
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;


// task 3
let canSignalPrisoner = prisonerIsAwake && archerIsAwake;


// task 4
let canFreePrisoner = petDogIsPresent && !archerIsAwake || !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake;