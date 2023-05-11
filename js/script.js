const userFirstName = prompt('Type your name here.')

const userLastName = prompt('Type your last name here.')

const userFavColor = prompt('Type your favorite color here.')

const userPassword = userFirstName + userLastName + userFavColor + "23"

alert('DO NOT USE THIS PASSWORD')

document.getElementById('yourPwdIs').innerHTML = "Your useless password is: " + userPassword