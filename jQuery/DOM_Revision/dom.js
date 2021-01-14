/*EXAMINE THE DOCUMENT OBJECT*/

//console.dir(document)
//console.log(document.domain)
//console.log(document.URL)
//console.log(document.title)
//document.title = 123
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
//console.log(document.all[10])
//document.all[10].textContent = 'DOM-MANIPULATION'
//console.log(document.forms[0])
//console.log(document.links)

//======================================================================


/*GET ELEMENT BY ID
====================== */

 console.log(document.getElementById('header-title'))
 var headerTitle = document.getElementById('header-title')
 var header = document.getElementById('main-header')
 console.log(headerTitle)
 headerTitle.textContent = 'hello'
 headerTitle.innerText = 'Goodbye mac'
 console.log(headerTitle.innerText)
 headerTitle.innerHTML = '<h3>Hell<h3>'
// header.style.borderBottom = 'solid 3px #000'

/*GET ELEMENT BY CLASS NAME
=============================*/

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'hello'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// items.style.backgroundColor = '#f4f4f4'
//     //Gives error

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

/*select element by tag name 
==============================*/

/*var items = document.getElementsByClassName('li')
console.log(li)
console.log(li[1])
li[1].textContent = 'hello'
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'yellow'

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#f4f4f4'
}*/

/*QUERY SELECTOR
===================*/

/*var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 14px #ccc'

var input = document.querySelector('input')
input.value = 'Add Items'

var submit = document.querySelector('input[type="submit"]')
submit.value = "SEND"

var item = document.querySelector('.list-group-item')
item.style.color = 'red'

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue'

var secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'yellow'*/

/*QUERY SELECTOR ALL
  =>Same like select element by tag name
=========================================================== */

var titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent = 'hello'

//=>Select odd and even elements
var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'red'
    even[i].style.backgroundColor = 'yellow'
}