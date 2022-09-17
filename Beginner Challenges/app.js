/**
 * Q1. Return the Sum of Two Numbers Create a function that takes two arguments as functions and return their sum.
 * addition(3,2)--> 5 
 * addition(-3,-6)--> -9 
 * addition(7,3)-> 10
 */

function additon1(num1, num2) {
    return num1 + num2;
}
console.log(additon1(3, 2));

function addition2(num1, num2) {
    return num1 + num2;
}
console.log(addition2(-3, -6))

function addition3(num1, num2) {
    return num1 + num2;
}
console.log(addition3(7, 3))

/**
 * Q2. Convert Hours into Seconds Create a function that converts hours into seconds
 * hoursIntoSeconds(2) -> 7200 
 * hoursIntoSeconds(10) -> 36000 
 * hoursIntoSeconds(24) -> 86400
 */

function hoursIntoSeconds(hours) {
    return hours * 60 * 60
}
console.log(hoursIntoSeconds(24))

/**
 * Q3. Calculate the Perimeter of a Rectangle Create a function that takes length and 
 * width of a rectangle and return it's perimeter. 
 * calcPerimeter(6, 7) -> 26 
 * calc Perimeter(20, 10) -> 60 
 * calcPerimeter(2,9)->22
 * Perimeter of rectangle Length x 2 + width x 2
 */

function calcPerimeter(length, width) {
    return length * 2 + width * 2;
    // or 2 x (length + width2)
}
console.log(calcPerimeter(6, 7))

/**
 * Q4.Calculate the Area of a Triangle Write a function that takes the base and height of 
 * a triangle and return its area. 
 * calcTriangleArea(3, 2) → 3 
 * calcTriangleArea(10, 10) → 50 
 * calcTriangleArea(20, 20) -->200 
 * 
 * -Take in two arguments, base & height 
 * -Formula to calculate area is 0.5 * base * height 
 * -Return the answer and console.log it 06:37
 */

function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}
console.log(calcTriangleArea(3, 2))

/**
 * Q5. Extend a String Write a function accepts a string and adds 'Frontend'onto the end of it. 
 * appendFrontend('Apple') → "AppleFrontend" 
 * appendFrontend('Banana') "BananaFrontend" 
 * appendFrontend('Orange') → "OrangeFrontend" 
 * 
 * - Accept a string 
 * - Adding strings is similar to adding numbers 
 * - Don't forget to return your result 08:28
 */

function appendFrontend(str) {
    return str + 'Frontend'
}
console.log(appendFrontend('Apple'));

/**
 * Q6. Greater than 100? Given two numbers, return true if the sum of both numbers is greater 
 * than 100. Otherwise,return false. 
 * sumGreater Than100(20,10) -> false 
 * sumGreaterThan100(50, 60) --> true 
 * sumGreaterThan100(100, −50) -> false
 */

function sumGreaterThan100(num1, num2) {
    if (num1 + num2 > 100) {
        return true
    }
    else {
        // According to David we can use return without the else.
        // we can also reduce it to return num1 + num2 >= 100
        // Because it already gives a boolean without conditions
        return 'The sum of your numbers is inferior'
    }
}
console.log(sumGreaterThan100(20, 10))

/**
 * Q7. Less than or Equal to Zero? Write a function that accepts a number and returns true if 
 * it is less than or equal to zero, otherwise returns false. 
 * less Than OrEqualToZero(3)→ false 
 * less Than OrEqualToZero(0)→ true 
 * less ThanOrEqualToZero(-2) → true 
 * 
 * -Tip: Use the less than or equal to operator
 */

function lessThanOrEqualToZero(number) {
    return number <= 0
}
console.log(lessThanOrEqualToZero(-2))

/**
 * Q8. Opposite boolean Given a boolean (true or false), return the opposite boolean. 
 * oppositeBoolean(true) → false 
 * oppositeBoolean(false) → true
 */

function oppositeBoolean(boolean) {
    // An "!" will give the opposite of te boolean
    return !boolean
}
console.log(oppositeBoolean(true))

/**
 * Q9. Is not the number 0 Given ANY element, return true if it is NOT the number 0. 
 * isNotZero(5) --> true 
 * isNotZero(0) -> false 
 * isNotZero(null) -> true
 */

function isNotZero(number) {
    return number !== 0
}
console.log(isNotZero(5));

/**
 * Q10.Calculate the remainder Given two numbers, return their remainder when divided 
 * by each other. 
 * calcRemainder(4, 2) → 0 
 * calcRemainder(7, 8)→ 7 
 * calcRemainder(9,8)→ 1
 */

function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(9, 8))