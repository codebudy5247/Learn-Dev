//IIFE

// Normal function
function addTogether() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
}
addTogether();

//IIFE
(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
})();