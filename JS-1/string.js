//string

let p = 'aditya'
let str = `This is ${p}'s string`
console.log(str)

//newline
let longStr = `this is \n a very long \n string`
console.log(longStr)

//length
console.log(str.length)
console.log(longStr.length)

//searching
let s = 'this has some data here'
let key = 'has'
console.log(s.indexOf(key)) //if key not present return -1

//arguments
let st = 'this is a easy job'
console.log(str.indexOf('is', 4))

//slice
let mainStr = 'this is a long string'
let smallStr = mainStr.slice(2, 7)
console.log(smallStr)

//substring
let s2 = mainStr.substring(7, 10)
console.log(s2)

//substr
let s3 = mainStr.substr(3, 4)
console.log(s3)