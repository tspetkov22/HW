// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

function findMaxEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i];
        }
    }
}
// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);