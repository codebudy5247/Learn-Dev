//Object oriented programming in javascript

//allows to create objects without defining the class.
//JSON:Javascript Object Notation

let bird = {
    x: 100,
    y: 20,
    color: "blue",
    eggs: ['one', 'two', 'three', 'four'],

    fly: function() {
        console.log("Bird is Flying", this.x, this.y)
    }
};
console.log(bird)
console.log(bird.y) //accessing value

//bird.y = 200 //updating value
console.log(bird.y)

//Iterate:For Loop
for (let i = 0; i < bird.eggs.length; i++) {
    console.log(bird.eggs[i])
}

//forEach loop
bird.eggs.forEach(function(val, idx) {
    console.log(idx, val)
})

bird.fly()