function person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.isAdult = function() { return this.age > 18 }
}
let p = new person('Harry', 'potter', 3)
let p1 = new person('John', 'Doe', 18)
let p2 = new person('Mike', 23)




console.log(p2)
console.log(p2.isAdult())
console.log(p.isAdult())
console.log(person)