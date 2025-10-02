/*
* Question 1: ES6 Features
● Create a script with a function named lowerCaseWords that takes a
mixed array as input.
The function will do the following.
- return a promise that is resolved or rejected
- filter the non-strings and lower case the remaining words
*/
const lowCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Invalid input. Must be an array");
        } else {
            const filtered = mixedArray
                .filter(element => typeof element === "string")
                .map(word => word.toLowerCase());

            resolve(filtered);
        }
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowCaseWords(mixedArray)
    .then(result => console.log("Filtered result: ", result))
    .catch(err => console.log("There's been an error: ", err));