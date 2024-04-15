/*
We are going to modify the article's content by adding whatever you want instead of the red square.

Challenge: try adding new red squares to the article. How would you do it ? Don't worry about the styles, they are already done for you. You should only worry about how to create them by using the DOM methods.

Have fun and don't be afraid of breaking up everything ! Happy coding !
*/

let squaresContainer = document.querySelector(".squaresContainer")
let squareHTML = '<div class="redSquare"><img src=""></div>'
function change() {
    squaresContainer.innerHTML += squareHTML
}
