//Pass by value && Pass by Refrence.

//pass by value
/*
 --> In Pass by Value, Function is called by directly passing the value
      of the variable as the argument. Changing the argument inside
      the function doesn’t affect the variable passed from outside
      the function.
 --> when a variable refers to an object which includes array,
     the value is the reference to the object.
 */
let quidditchWinner = "Harry Potter"

function changeWinner(winner) {
    console.log("original winner = " + winner)
    winner = "Draco Malfoy"
    console.log("change Winner = " + winner)
}
console.log("the winner was  " + quidditchWinner)
changeWinner(quidditchWinner)
console.log("Now the winner is " + quidditchWinner)

//pass by reference
/*
-->In Pass by Reference, Function is called by directly passing the
   reference/address of the variable as the argument. Changing the
   argument inside the function affect the variable passed from outside
   the function. In Javascript objects and arrays follows
   pass by reference.
-->so if we are passing object or array as an argument to the method,
   then there is a possibility that value of the object can change.
*/

let quidwinner = ["harry", "ron", "hermoine"]

function changewinners(winners) {
    winners[0] = "draco"
    winners[1] = "crabbe"
    winners[2] = "pansy"
}
console.log("the winners were " + quidwinner)
changewinners(quidwinner)
console.log("now the winners are " + quidwinner)

//Another example

function callByReference(varObj) {
    console.log("Inside Call by Reference Method");
    varObj.a = 100;
    console.log(varObj);
}
let varObj = { a: 1 };
console.log("Before Call by Reference Method");
console.log(varObj);
callByReference(varObj)
console.log("After Call by Reference Method");
console.log(varObj);

/**
   -->Javascript always pass by value so changing the value of the
      variable never changes the underlying primitive (String or number).
*/