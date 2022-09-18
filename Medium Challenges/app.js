/**
 * Q1.Falsy or Truthy? Given two values, return the first one if it is falsy, otherwise return 
 * the second one. 
 * filterOutFalsy(0,500) → filter 
 * OutFalsy(false, 100) → false 
 * filterOutFalsy([true, 'Dog']) → 'Dog'
 */

// !0 = true !!0 = false
function falsyOrTruthy(num1, num2) {
    // return !!num1 === false ? num1 : num2;
    return !num1 ? num1 : num2;
}
console.log(falsyOrTruthy(0, 500))

/**
 * Q2. Return the length of any given array Given an array, return its length. 
 * arrLength([1,2,3]) → 3 
 * arrLength([5, 0, −4, 1 ]) → 4 
 * arrLength([]) →→ 0
 */

function arrLength(arr) {
    return arr.length;
}
console.log(arrLength([1, 2, 3]))

/**
 * Q3. Get the last element in an array Given an array return the first element. 
 * lastElem([3,2,0, 6, 2]) → 2 
 * lastElem(['dog', 'cat', 'ball']) → 'ball' 
 * lastElem([null,5, false]) → false
 */

function lastElem(arr) {
    return arr[4];
    // or selecting the last one without counting
    //return arr[arr.length - 1]
}
console.log(lastElem([3, 2, 0, 6, 2]))

/**
 * Q4. Find the sum of an array Given an array, return the sum of every element. 
 * arrSum([2,2,2]) → 6 
 * arrSum([100,200, 500]) → 800
 * 800 arrSum([0, -5, -10]) → -15
 */

function arrSum(arr) {
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(arrSum([100, 200, 500]))

/**
 * Q5.Add up the numbers from a single number Given a number, add up all the numbers from 
 * one to the number that is given. E.g. An input of 4 will give you 1 + 2 + 3 + 4, 
 * which equals 10. 
 * progressiveSum(3) → 6 
 * progressiveSum(4) → 10 
 * progressiveSum(600)→ 180300
 */

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1 ; i <= num ; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(progressiveSum(6))

/**
 * Q6. Calculate the time Given a number in seconds, return this number in mm:ss format. 
 * calcTime(66) → '01:06' 
 * calcTime(50)→ '00:50' 
 * calcTime(300)→ '05:00'
 */

function calcTime(time) {
    // Math.floor pour arrondir
    let timerMinutes = Math.floor(time / 60);
    // time in seconds % 60 give us the rest in seconds
    let timerSeconds = time % 60;

    // The code means, if the minutes length is = to 1 then add a 0 before
    // Had to convert it into a string in order to measure the length because
    // can't measure number's length. Using .toString()
    // Equal to 1 means 1 digit.
    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(70))

/**
 * Q7. Find the largest number Given an array of numbers, return the largest number of that 
 * array getMax([5, 100, 0]) → 100 
 * getMax([12, 10, -20]) → 12 
 * getMax([-300,-100, -200]) → -100
 */

function getMax(arr) {
    
}