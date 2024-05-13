//TASK: 
//да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

// ---> YOUR CODE HERE <---
function calcRectangleArea(rectWidth, rectHeight) {
    return rectHeight * rectWidth;
}

// !!! Do not change code bellow
// TEST:
let rectWidth = 6;
let rectHeight = 3;

let area = calcRectangleArea(rectWidth, rectHeight);

console.log(`The area of rectangle is: ${area}`);

// EXPECTED RESULT:
// The area of rectangle is: 18