//Array&methods
let arr = [1, 2, 3]
console.log(arr.length)

let arr2 = [23, 'hello', 1990, false, [2, 3]]
console.log(typeof arr2[1])

//for loop
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

//for of loop
for (let val of arr2) {
    console.log(val)
}

//for in loop
for (let index in arr2) {
    console.log(index)
}

let fruits = ['apple', 'orange']
    //push and pop
    //we can push multiple items at end
fruits.push('melon')
console.log(fruits)
fruits.pop()
console.log(fruits)

//shift and unshift
//we can unshift multiple items at front
fruits.shift()
console.log(fruits)

fruits.unshift('kiwi', 'grapes')
console.log(fruits)

//slice,splice,concat
let notes = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do']
console.log(notes)

//slice
console.log(notes.slice(4))
console.log(notes.slice(4, 6))
    //console.log(notes)

//splice
console.log(notes.splice(4))
console.log(notes)

//concat
let notes2 = ['do', 're', 'mi']
notes2.concat(['sa', 're', 'ga'])
console.log(notes2)