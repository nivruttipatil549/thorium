//Module 3

function trim() {
   let name = '  Nivrutti Dukare    '
   console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
   let name = 'NIvRuti DUKre'
   console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
   let name = 'nivrutt dukre'
   console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase

