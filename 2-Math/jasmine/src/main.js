let ratePerHour = 60;
let dayRate = ratePerHour * 8;


let budget = 1000;
let workdays = Math.floor(budget / dayRate);
// Math.floor is to round down //


let billable = 22;
// let monthlyDiscount = 0.2;
 let monthlyDiscount = (billable * dayRate) * .2

let fullMonths = Math.floor(35 / billable);
let remainingDays = 35 - billable;
// let remainingDays = 35 - billable; //

// let discountedMonthlyRate = dayRate * billable * (1 - monthlyDiscount);
let discountedMonthlyRate = (billable * dayRate) - monthlyDiscount
let remainingCost = remainingDays * dayRate;
let totalProjectCost = Math.ceil(discountedMonthlyRate + remainingCost);