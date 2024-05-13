let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
function getHighestScoreIndex(score){
    return scores.indexOf(Math.max(...score));
}

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:
// ---> YOUR CODE HERE <---
let higestScore = getHighestScoreIndex(scores);
let studentWithHigestScore = students[higestScore];
console.log(`The student ${studentWithHigestScore} has the higest score: ${scores[higestScore]}`);
// expected output
// Maria has the higest score: 6


