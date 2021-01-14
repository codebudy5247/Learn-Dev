// Answer in context of C++/Java
// What does the keyword "this" mean, what does it refer to ?
// In which places in code can we NOT use "this" ?

function checkThis() {
    console.log(this)
}
//checkThis()

let obj = {
    "a": 10,
    b: 'asdsa',
    c: true,
    d: function() {
        console.log(this)
    },
    10: 32246,
    true: 'asdasd',
    e: {
        l: 234,
        m: 'sdgsdg',
        n: function() {
            console.log(this)
        },
    },
}
console.log(obj.a)
obj.d()
obj.e.n()
console.log(obj['10'])
console.log(obj['true'])
console.log(obj.a)

const test = {
    prop: 42,
    func: function() {
        return this.prop;
    },
};

console.log(test.func());