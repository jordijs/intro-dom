/*
We are going to modify the article's content by adding whatever you want instead of the red square.

Challenge: try adding new red squares to the article. How would you do it ? Don't worry about the styles, they are already done for you. You should only worry about how to create them by using the DOM methods.

Have fun and don't be afraid of breaking up everything ! Happy coding !
*/
function change() {
    // add red squares to the HTML when the button is clicked
    const redSquare = document.querySelector(".redSquare").innerHTML
    let redSquareElement = document.createElement('div')
    redSquareElement.innerHTML = redSquare
    document.querySelector("article").appendChild(redSquareElement)
}
