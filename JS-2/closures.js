//closures
/*A closure is an inner function that can access to the outer(enclosing)
  function variable.*/

/*let i = 10

function show() {
    var j = 20
    console.log(j) //20
    console.log(i) //10
}
show()*/


function outer(arg1) {
    let var1 = 10
        //console.log(arguments[0])

    function inner(arg2) {
        let var2 = 20

        console.log(arg1, var1, arg2, var2)
        console.log(arguments[0])
    }
    return inner
        //return 10

}
let x = outer('param1')

//typeof x==='function'
//x=inner
// scope of arg1 and var1 are from lines 16 to 22
x('param2')