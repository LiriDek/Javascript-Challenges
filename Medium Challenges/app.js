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

function calcTime(seconds) {
    // Math.floor pour arrondir
    let timerMinutes = Math.floor(seconds / 60);
    // time in seconds % 60 give us the rest in seconds
    let timerSeconds = seconds % 60;

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
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([5, 100, 0]));

/**
 * Q8. Reverse a string Given a string, return the reversed string 
 * reverseString('abc')→ 'cba' 
 * reverseString('David') → 'divaD' 
 * reverseString('This is cool') → 'looc si siht' 
 * - Use an incrementing for loop -Use a decrementing for loop 
 * -Use the array reverse property 25:25
 */

function reverseString(string) {
    let reversedString = '';
    // Decrementing loop
    // for (let i = string.length; i >= 0; i--) {
    for (let i = 0; i < string.length; i++) {
        reversedString = string[i] + reversedString;
    }
    return reversedString;
}
console.log(reverseString('abc'));
// Other way to do it
// 'abc'.split('') - converts string to array so it's equal to : ['a', 'b', 'c']
// 'abc'.split('').reverse() - reverse the elements on the array : ['c', 'b', 'a']
// 'abc'.split('').reverse().join('') - Puts the reversed elements of the array back to string = 'cba'
// So in the fuction we don't need to loop it. just - return str.split(''). reverse().join('' );


/**
 * Q9. Turn every element in an array into 0 Given an array of elements, return the same length 
 * array filled with O's. 
 * convertToZeros([5, 100, 0]) → [0, 0, 0] 
 * convertToZeros([12]) → [0] 
 * convertToZeros([1, 2, 3, 4, 5]) → [0, 0, 0, 0, 0] 
 * 
 * Solution 1: For loop 
 * Solution 2:Array'fill' 
 * Solution 3:Array 'map'
 */

// .push() solution
function convertToZeros(arr) {
    let zeroTab = []
    for (let i = 0; i < arr.length; i++) {
        zeroTab.push(arr[i] * 0)
    }
    return zeroTab
}
console.log(convertToZeros([5, 100, 0]))

// loop solution is inside of the for loop to wirte this :
// zeroTab[i] = 0
// and return zeroTab

let array = [5, 25, 35]
let zeroArray = array.map ((element) => {
    return element * 0;
})
console.log(zeroArray)

// OR

function convertToZeros(arr) { 
    return arr.map(elem => 0); 
} 
console.log(convertToZeros([1, 2, 3, 4, 5]));

// .fill() solution
// Don't need a for loop. just write this inside of the function :
// return new Array(arr.length).fill(0);
// Basically it will fill the array with zeros depending on arrays length

/**
 * Q10.Filter out all the apples Given an array of fruits, if it is an apple remove it 
 * from the array. 
 * removeApples(['Banana', 'Apple', 'Orange', 'Apple']) → ['Banana, 'Orange'] 
 * removeApples(['Tomato', 'Orange', 'Banana']) → ['Tomato', 'Orange', 'Banana'] 
 * removeApples(['Banana', 'Orange', 'Apple']) → ['Banana, 'Orange'] 
 * 
 * Solution 1: For loop 
 * Solution 2:Array 'filter'
 */

function removeApples(arr) {
    let arrElem = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Apple') {
            arrElem.push(arr[i])
        }
    }
    return arrElem
}
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

// .filter() method

function removeApples(arr) { 
    return arr.filter(elem => elem !== 'Apple'); 
} 
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

/**
 * Q11. Filter out all the falsy values Given an array of values, filter out all the falsy values 
 * and only return the truthy values. 
 * filterOutFalsy(["", [ ], 0, null, undefined, "0" ]) → [ [], "0"] 
 * filterOutFalsy(['Tomato', 'Orange', 'Banana', false]) → ['Tomato', 'Orange', 'Banana'] 
 * filterOutFalsy(['Banana', 'Orange', 'Apple']) → ['Banana, 'Orange'] 
 * 
 * Solution 1: For loop 
 * Solution 2:Array 'filter'
 */

 function filterOutFalsy(arr) {
    let truthy = []
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            truthy.push(arr[i])
        }
    }
    return truthy
}
console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));

// .filter() method

function filterFalsy(arr) { 
    return arr.filter(elem => !!elem); 
} 
console.log(filterFalsy(["", [], 0, null, undefined, "0"]));

/**
 * Q12.Truthy to true, Falsy to false Given an array of truthy and falsy values, return the same 
 * array of elements into its boolean value. 
 * convertToBoolean([500, 0, "David", "", []]) → [true, false, true, false, true]
 */

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}
console.log(convertToBoolean([500, 0, "David", "", []]))