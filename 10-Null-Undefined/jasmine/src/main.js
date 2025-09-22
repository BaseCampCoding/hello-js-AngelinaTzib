// task 1 //
let visitorName = "Kaden";
let visitorAge = 45;
let visitorTicketId = "Tic48";
let visitor = {
    name: visitorName, 
    age: visitorAge,
    ticketId: visitorTicketId
}
console.log(visitor);


// task 2 //
visitor.ticketId = null;
console.log(visitor);

// task 3 //
let tickets = {
    "Ticket48": null,
    "Ticket49": "Kaden"
}
let ticketIdToCheck = "Ticket49";
let ticketStatusResult;
if(!(ticketIdToCheck in tickets)){
    ticketStatusResult = "unknown ticket id"
}
else if(tickets[ticketIdToCheck] == null){
    ticketStatusResult = "not sold"
}
else{
    ticketStatusResult = "sold to " + tickets[ticketIdToCheck]
}
console.log(ticketStatusResult);


// task 4 //
let simpleTicketStatusResult
if(ticketIdToCheck in tickets && tickets[ticketIdToCheck]){
    simpleTicketStatusResult = tickets[ticketIdToCheck]
}
else{
    simpleTicketStatusResult = "invalid ticket"
}
console.log(simpleTicketStatusResult);


// task 5 //
let visitorWithGtc = {
    name: "Kaden",
    gtc: {version: "v2.0"}
}
let gtcVersion;
if(visitorWithGtc.gtc && visitorWithGtc.gtc.version){
    gtcVersion = visitorWithGtc.gtc.version;
}
console.log(gtcVersion);