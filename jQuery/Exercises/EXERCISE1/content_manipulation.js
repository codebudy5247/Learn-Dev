function setFirstName() {
    // Change the content of h1 to your first name
    var header = document.getElementById('firstname')
    header.textContent = 'Aditya'
}

function setLastName() {
    // Change the content of div to your last name
    var last = document.getElementById('lastname')
    last.textContent = 'shekhar'
}

function setFullName() {
    // Change the content of p to your full name (firstname - lastname)
    var para = document.getElementById('fullname')
    para.textContent = 'Aditya Shekhar'
}

function resetDefaults() {
    // reset the firstname, lastname, and fullname to empty values

    //document.getElementById('def').reset()
    //using window.location.reload()

}