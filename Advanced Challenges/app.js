/**
 * Q1.Show rating Given a rating,display a star (*) for each full rating and a full-stop (.) 
 * for each half rating. 
 * showRating(3)- "***" 
 * showRating(4.5) - "****."
 * showRating(0.5) → "."
 */

function showRating(rating) {
    let star = "";
    // Math.floor (pour arrondir car une étoile de plus apparait en cas de décimal)
    for (let i = 0; i < Math.floor(rating); i++) {
        star += "*"
        if (i !== Math.floor(rating) - 1) {
            star += " "
        }
    }
    // If the number is not ('!') integer (Nbre entier)
    if (!Number.isInteger(rating)) {
        star += " ."
    }
    return star;
}
console.log(showRating(3.5))

/**
 * Q2. Sort by lowest to highest price S Given an array of numbers, return the prices sorted by 
 * low to high. 
 * sortLowToHigh([20, 40, 10, 30, 50, 10]) → [10, 10, 20, 30, 40, 50] 
 * sortLowToHigh([5, 10, 0, −5]) → [-−5, 0, 5, 10] 
 * sortLowToHigh([3, 2, 1, 0]) → [0, 1, 2, 3]
 */

// .sort() methos is to sort the elements on an array
// .sort((a, n) a - b) is to sort numbers on an array from the lowest to the highest
// .sort((a, n) b - a) it sorts from the highest to the lowest
// .sort((a, n) a - blur) is to reset the sorting on its initial position ?
function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b)
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))

/**
 * Q3.Sort by highest to lowest price Given an array of objects, return the prices sorted by 
 * high to low. 
 * sortHighToLow([ 
 * {id: 1, price: 50 }, 
 * {id:2, price: 30 }, 
 * {id: 3,price: 60 }, 
 * {id: 4,price:10 },
 * ])
 * → [{ id: 1, price: 50 }, 
 * {id:2,price: 30}, 
 * { id: 3, price: 60 }, 
 * {id:4, price: 10 }]
 */

 function sortHighToLow(numbers) {
    return numbers.sort((a, b) => {
        // Price which is the element inside of the object i want to sort
        return b.price - a.price
    });
}
console.log(
    sortHighToLow([ 
    {id: 1, price: 50 }, 
    {id: 2, price: 30 }, 
    {id: 3, price: 60 }, 
    {id: 4, price: 10 },
    ]))

/**
 * Q4. Promises On Youtube,watch: "The Async Await Episode I Promised" 
 * -Fireship "Async Await JavaScript ES7" Techsith (1.5x Speed) "Async JS Crash Course 
 * - Callbacks, Promises, Async Await" 
 * -Travsery Media (1.5x Speed)
 */
/**
 * UPDATE
 * Resources mentioned in the video no longer necessary - 
 * the PROMISES course covers everything
 */

/**
 * Q5. Find all the posts by a single user Call this 
 * API"https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user ld.
 * postsByUser(4)→
 */

async function postByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    // When i fetch i need to convert the data on something javascript understands that's why we use .json()
    const result = await promise.json();
    const posts = result.filter(element => element.userId === userId);
    console.log(posts)
}
console.log(postByUser(4))


/**
 * Q6. First 6 Incomplete Todos Call this 
 * API"https://jsonplaceholder.typicode.com/todos" 
 * and return the first 6 incomplete todo's from the result.
 * firstSixIncomplete()
 */

async function firstSixIncomplet() {
    const promiseNew = await fetch("https://jsonplaceholder.typicode.com/todos");
    const resultNew = await promiseNew.json();
    // .slice() method is to show the sixfirst results
    const completedFalse = resultNew.filter(element => !element.completed).slice(0, 6);
    console.log(completedFalse)
}
console.log(firstSixIncomplet())
