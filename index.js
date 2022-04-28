// Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0, 2);    
}

const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2);
}

// selectingDrivers — This is an array containing two elements:
// the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// fareDoubler()
// — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);

// fareTripler()
// — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
// Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers()
// — This function takes two arguments:
// An array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
// Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
function selectDifferentDrivers(drivers, functionDecision) {
    return functionDecision(drivers);
}




