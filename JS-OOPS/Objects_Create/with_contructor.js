/* With Constructor:
   A "constructor" in JavaScript is "just" a function that happens to
   be called with the new operator.
   The constructor method is a special method of a class for creating
   and initializing an object of that class. */

/*class Polygon {
    constructor() {
        this.name = 'Polygon';
    }
}

const poly1 = new Polygon();

console.log(poly1.name);*/



function Graph() {
    this.vertices = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function(v) {
        this.vertices.push(v);
    },
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.