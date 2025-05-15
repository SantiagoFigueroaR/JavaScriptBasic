//Strings
//Concatenacion
let myName = "Santiago"
let greting = "Hola, " + myName + "!"
let email = 'eduardo.figueroa@gmail.com'
console.log(greting)
console.log(typeof greting)

//Longitud
console.log(greting.length)

//Acceso a caracteres
console.log(greting[0])
console.log(greting[14])

//Metodos comunes 
console.log(greting.toUpperCase())
console.log(greting.toLowerCase())
console.log(greting.indexOf("Santiago"))
console.log(greting.includes("Hola"))
console.log(greting.slice(0 , 11))
console.log(greting.replace("Hola" , "Hi"))

//Template Literals
let message = "Hola este es "

// interpolar cadenas de texto.
console.log(`Hola, ${myName} ! Tu edad es  ${email}.`)