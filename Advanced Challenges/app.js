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