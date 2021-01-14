//var,let,const

var a = 10
a++
console.log(a)

let b = 20
b++
console.log(b)

//const c=30
//c++
//console.log(c) //show error//const does not not allow reassign something
const obj = {
    k1: "asd",
    k2: 10,
    k3: false
}
obj.k4 = 123
console.log(obj.k4)

delete obj.k1
console.log(obj)

const arr = [1, 2, 5]
arr.push(77)
console.log(arr)

//scope