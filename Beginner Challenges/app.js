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
 * REMAINDER is the rest after a division. EX : 4/3 = 1. 1 is the rest.
 * calcRemainder(4, 2) → 0 
 * calcRemainder(7, 8)→ 7 
 * calcRemainder(9,8)→ 1
 */

function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(9, 8))

/**
 * Q11. Is the number odd? Given two numbers, return true if the number is odd 
 * odd = impair
 * isOdd(1) → true 
 * isOdd(2)→ false 
 * isOdd(3)→ – true
 */

function isOdd(num1, num2) {
    return num1 % num2 === 1;
    // David's way : return number % 2 !== 0
}
console.log(isOdd(2, 1))

/**
 * Q12. If a number is even, return 1 otherwise return -1 Create a function that takes a number 
 * argument and returns 1 if the number is even. If the number is odd return −1.
 * Even = pair 
 * booleanInteger(1) → −1 
 * booleanInteger(2) → 1 
 * booleanInteger(5) → −1
 */

function booleanInteger(number) {
    return number % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(6))

/**
 * Q13.Check if a user is logged in AND subscribed Create a function that takes in two strings. 
 * If the first string is equal to 'LOGGED_IN'AND the second string is equal to 
 * 'SUBSCRIBED' return true, otherwise return false. 
 * isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED) → true 
 * isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') → false 
 * isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') → false
 */

function isLoggedInAndSubscribed(log, sub) {
    return log ==='logged in' && sub === 'subscribed' ? true : false;
}
console.log(isLoggedInAndSubscribed('logged in', 'subscribed'))

/**
 * Q14. Check if a user is logged in OR subscribed Create a function that takes in two strings. 
 * If the first string is equal to 'LOGGED_IN'OR the second string is equal to 'SUBSCRIBED' 
 * return true,otherwise return false. 
 * isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED) → true 
 * isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') → false // A mistake from David maybe ?
 * isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') → false
 */

 function isLoggedInAndSubscribed(log, sub) {
    return log === 'logged in' || sub === 'subscribed' ? true : false;
}
console.log(isLoggedInAndSubscribed('logged in', 'subscribed'))