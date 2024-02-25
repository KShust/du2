const yourName = prompt("Zadej sve jmeno: ")
const yourSurname = prompt("Zadej svoje prijmeni: ")

let alias = {
    name: yourName.trim().toLowerCase().slice(0, 3), 
    surname:  yourSurname.trim().toLowerCase().slice(0, 5),
}

const userName = (alias.name + alias.surname)
const userDomain = "@fit.cvut.cz"

let email = userName + userDomain

console.log (email)