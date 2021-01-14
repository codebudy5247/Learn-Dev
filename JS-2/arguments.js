/*arguments is an Array-like object accessible inside functions
 that contains the values of the arguments passed to that function.*/

function func1(a, b, c) {
    console.log(arguments[0]);


    console.log(arguments[1]);


    console.log(arguments[2]);

}
func1(1, 2, 3);

/*
 arguments[0]->first argument
 arguments[1]->second argument
 arguments[3]->third argument
 Each argument can also be set or reassigned.
*/