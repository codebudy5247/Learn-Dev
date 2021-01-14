var a = { a: 1 };

var b = Object.create(a);

console.log(a.a); // print 1 
console.log(b.a); // print 1
b.a = 5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(b.a); // print 1(b.a value 5 is deleted but it showing value from its prototype chain)
delete a.a;
console.log(a.a); // print undefined
console.log(b.a); // print undefined


function Graph() {
    this.vertices = [4, 4];
}

var g = new Graph();
console.log(g.vertices); // print [4,4]
g.vertices = 25;
console.log(g.vertices); // print 25
delete g.vertices;
console.log(g.vertices); // print undefined