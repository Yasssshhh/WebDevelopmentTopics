// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a 
// way to represent variadic functions in JavaScript.


// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// COLLECT THE "REST" IN NUMS:
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

// A function definition can only have one rest parameter, and the rest parameter must be the last parameter 
// in the function definition.

function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
// The rest parameter is not counted towards the function's length property.