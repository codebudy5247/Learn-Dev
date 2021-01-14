/*TRAVERSING THE DOM*/
var itemList = document.querySelector('#items')

//=>parentNode
/*console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = 'yellow'

console.log(itemList.parentNode.parentNode)
console.log(itemList.parentNode.parentNode.parentNode)*/

//=>parentElement
/*console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = 'red'

console.log(itemList.parentElement.parentElement)
console.log(itemList.parentElement.parentElement.parentElement)*/

//=>childNodes
//console.log(itemList.childNodes)
//dont use

//=>children
/*console.log(itemList.children)
itemList.children[0].style.backgroundColor = 'yellow'*/

//=>firstChild
//console.log(itemList.firstChild)
//dont use

//=>firstElementChild
/*console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'firstChild' */


//=>lastChild
//console.log(itemList.lastChild)
//dont use

//=>lastElementChild
/*console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent = 'lastChild' */


//=>nextSibling
//console.log(itemList.nextSibling)
//=>nextElementSibling
//console.log(itemList.nextElementSibling)


//=>previousSibling
//console.log(itemList.previousSibling)
//=>previousElementSibling
/*console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'red' */


//=>createElement

//=>create a div
var newDiv = document.createElement('div')
    //add class
newDiv.className = 'hello'

//add id
newDiv.id = 'hello1'

//add attr
newDiv.setAttribute('title', 'hello')

//create text node
var newDivText = document.createTextNode('hello world')

//Add text to div
newDiv.appendChild(newDivText)

//add to dom-dont work --work on this
var container = document.querySelector('header.container')
var h1 = document.querySelector('header h1')

console.log(newDiv)

newDiv.style.fontSize = '30px'

container.insertBefore(newDiv, h1)
    //container.appendChild()