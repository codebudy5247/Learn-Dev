function person(name, age, birthYear, occupation) {
    this.name = name
    this.age = age
    this.birthYear = birthYear
    this.occupation = occupation
        //return 10 {ignored}
}
let p = new person('harry', 45)
let p2 = new person('potter', 53, 1990, 'Singer')
let p3 = new person('mike', 53, 1994, 'teacher')
console.log(' p = ' + JSON.stringify(p))
console.log(' p = ' + p)
    //console.log(name)
    //console.log(age)
console.log(p2)
console.log(p2.age)
console.log(' p3 = ' + JSON.stringify(p3))