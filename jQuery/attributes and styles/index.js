let a = $('#one')

let b = a.text('hello ')
    //console.log(b)

console.log(a.html()) //hello

a.html('<b>hello</b>')
    //a.text('<b>hello</b>')

a.attr('height', 200)
a.attr('height', null)

//change color
a.attr('style', 'color:red')
a.css('color', 'blue')

//change font-size:css property
a.css('font-size', '20pt')
a.css('font-size', '25pt').attr('width', 300)