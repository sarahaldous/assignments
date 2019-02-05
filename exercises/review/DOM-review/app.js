var display = document.getElementById('container')

var title = document.createElement('h1')

title.textContent = "Hello World"
// display.textContent = "Hello World" - this is just a div floating around somewhere. 

title.style.backgroundColor = "purple"

display.appendChild(title)

display.innerHTML = "<h1 class='title-class'>HelloWorld</h1>"

display.appendChild(title)

// Nate's Notes:

// DOM - Document Object Model
// document

// - Interacting ( Selecting DOM elements, editing, adding)
var display = document.getElementById('container')
var title = document.createElement('h1')
title.textContent = "Hello World"
title.style.backgroundColor = "purple"


// InnerHTML alternative to create element, set content and styling, and append
// all in one.
display.innerHTML = `
    <h1 class='title-class'>Hello World</h1>
    <h1 class='title-class'>Hello World</h1>
`

display.appendChild(title)