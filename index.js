/*

Try to access to the title element by using the DOM methods. 
You can try to get it by using its tag name, its class name or its id. 
Then, try to get its text content only.

*/

function change() {
    const titleA = document.querySelector("h1")
    const titleB = document.querySelector(".titleName")
    const titleC = document.getElementById("titleId")
    const titleText = titleA.innerText;
    console.log(titleA)
    console.log(titleB)
    console.log(titleC)
    console.log(titleText)
}

change()