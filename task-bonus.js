// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
const drawTriangle = (length = 5) => {
    for (let i = 1; i <= length; ++i) {
        console.log("* ".repeat(i));
    }
};
drawTriangle();

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
    let spaced_word = word.toUpperCase().split('').join(' ');

    console.log("* ".repeat(word.length));
    for (let i = 1; i < word.length; ++i) {
        console.log(
            "* ".repeat(word.length - i - 1)
            + '*'
            + spaced_word.slice(-i * 2)
        );
    }
    console.log(spaced_word);
};

drawJavascriptWord();

// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
const vehicles = [
    {name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600]},
    {name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350]},
    {name: "AT-AT", measuredSpeeds: [20, 21, 20, 19]},
];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
    return Array.from(vehicles, (vehicle) => {
        return {
            name: vehicle.name,
            topSpeed: Math.max(...vehicle.measuredSpeeds)
        };
    })
};

console.log(getVehiclesAndTopSpeed(vehicles));