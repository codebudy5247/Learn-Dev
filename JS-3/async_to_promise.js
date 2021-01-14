 function someAsyncTask(callback) {
     console.log("Beginning of task");
     setTimeout(function() {
         console.log("End of task");
         callback();
     }, 30000);
 }
 /*someAsyncTask(function() {
     console.log("we did some task")
 })*/

 //Promisification
 /*let someTaskPromise = new Promise(function(resolve, reject) {
     someAsyncTask(resolve);
 });*/
 let someTaskPromise = function() {
     return new Promise(function(resolve, reject) {
         someAsyncTask(resolve);
     });
 };
 /*
     The then() method returns a Promise. It takes up to two arguments:
     callback functions for the success and failure cases of the Promise.
     Syntax:
     p.then(onFulfilled[, onRejected]);

     p.then(value => {
       // fulfillment
     }, reason => {
       // rejection
     });
 ->onFulfilled (Optional)
 A Function called if the Promise is fulfilled. This function has one
 argument, the fulfillment value. If it is not a function, it is
 internally replaced with an "Identity" function (it returns the 
 received argument).
 ->onRejected (Optional)
 A Function called if the Promise is rejected. This function has one
 argument, the rejection reason. If it is not a function, it is
 internally replaced with a "Thrower" function (it throws an error it
 received as argument).
     */
 someTaskPromise().then(function() {
     console.log("After task is complete");
 });

 /* using a resolved promise, the 'then' block will be triggered
    instantly, 
    but its handlers will be triggered asynchronously as demonstrated
    by the console.logs*/
 // const resolvedProm = Promise.resolve(33);

 // let thenProm = resolvedProm.then(value => {
 //     console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
 //     return value;
 // });
 // // instantly logging the value of thenProm
 // console.log(thenProm);

 // // using setTimeout we can postpone the execution of a function to the moment the stack is empty
 // setTimeout(() => {
 //     console.log(thenProm);
 // });


 // logs, in order:
 // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
 // "this gets called after the end of the main stack. the value received
 //  and returned is: 33"
 // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}