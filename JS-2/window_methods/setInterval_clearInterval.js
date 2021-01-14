/*
The set interval() method calls a function or evaluates an expression
at specified intervals (in ms 1000ms=1sec).
This method will continue calling the function until clearInterval() is
called,or the window is closed.
The ID value returned by setInterval() is used as the parameter for the
clearInterval() method. 
*/

setInterval(function() { console.log("Hello"); }, 3000);