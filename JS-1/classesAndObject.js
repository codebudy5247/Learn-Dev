//create "apple" object
let apple = {
    taste: "sweet",
    color: "red"
}
console.log(apple.color)
    //Another way
function fruit(taste, color) {
    this.color = color
    this.taste = taste
}
//new keyword
let mango = new fruit("sweet", "yellow")
let orange = new fruit("sour", "orange")
console.log(mango.taste)
console.log(orange.color)

//Class keyword(ECMAscript2015)
//class declaration(not hoisted)
class fruitClass {
    constructor(taste, color) {
        this.color = color
        this.taste = taste
    }
};
let kiwi = new fruitClass("sour", "green")
console.log(kiwi)
console.log(kiwi.taste)

//class expression
//it can't be hoisted
let fruitClass2 = class {
    constructor(taste, color) {
        this.color = color
        this.taste = taste
    }
};
let kiwi2 = new fruitClass2("sour", "green")
console.log(kiwi2)