//Immediately invoked function expression(IIFE)
/* -->Defined as an expression and executed immediately after creation.
   -->An Immediately Invoked Function Expression is a good way at protecting
      the scope of your function and the variables within it.
   -->One way to prevent the functions and variables from polluting the global
      object is to use immediately invoked function expressions.   
      
*/

/*(function() {
    console.log("hello")
})()*/

/*function doMath(){
    console.log("3^4 = " + Math.pow(3,4))
    console.log("4^3 = " + Math.pow(4,3))
    console.log("root(2) = " + Math.sqrt(2))
    console.log("sin(10) = " + Math.sin(10))

}
doMath()*/

//minification in doMath function
(function(l, p, r, s) {
    l("3^4 = " + p(3, 4))
    l("4^3 = " + p(4, 3))
    l("root(2) = " + r(2))
    l("sin(10) = " + s(10))
})(console.log, Math.pow, Math.sqrt, Math.sin)

/*=========================================================== */
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i)
    }, 100)
}

/*============================================================= */

for (var i = 0; i < 10; i++) {
    setTimeout(console.log, 100, i)
}