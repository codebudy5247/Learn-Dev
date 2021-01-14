class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

let p1 = new Person('John Doe', 22)
let p2 = new Person('Jane Doe', 15)


//console.log(p2.age)
console.log(p1.isAdult())
console.log(p2.isAdult())
console.log(typeof Person) // function; there is NO new datatype called 'class'
console.log(p1.__proto__ == Person.prototype) // true
console.log(p1.__proto__.__proto__ == Object.prototype) // true

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age) //The super keyword is used to access and
            // call functions on an object's parent.
        this.grade = grade
    }
}

let s1 = new Student('Harry Potter', 13, 5)
let s2 = new Student('Hermoine Granger', 14, 6)

console.log(s1.isAdult())

console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

// inheritance chain 
// Object.prototype -> Person.prototype -> Student.prototype

// no inheritance between the classes (actually they are functions)
// Object -x-> Person -x-> Student



/**
function-new(before es6)
inheritance not possible

function Person (name, age) {
    this.name = name 
    this.age = age
}

function Student () {

}

let p1 = new Person('John Doe', 22) 
*/