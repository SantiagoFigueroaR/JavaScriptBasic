let nombre = "Santiago"
let  apePat = "Figueroa"
let  apeMat = 'Rodriguez'
let  edad = 29
// 1. Concatena dos cadenas de texto
let nombreCompleto = nombre + " " + apePat + " " + apeMat

// 2. Muestra la longitud de una cadena de texto
console.log(nombreCompleto.length)

// 3. Muestra el primer y último carácter de un string
console.log(nombreCompleto[0])
console.log(nombreCompleto[16])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(apeMat.toUpperCase())
console.log(apeMat.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias líneas
let message = `Este es mi mensaje 
en varias lineas`

// 6. Interpola el valor de una variable en un string
console.log(`Este es un mensaje intrerpoblado por ${nombreCompleto}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(nombreCompleto.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(nombreCompleto.includes("Figueroa"))
// 9. Comprueba si dos strings son iguales
console.log(nombre == nombre)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length == apeMat.length)