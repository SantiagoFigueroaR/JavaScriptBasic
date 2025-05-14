let a = 10
let b = 20 

console.log("-----> operaciones <-------")

console.log(a + b)  
console.log(a - b)
console.log(a * b)  //Multiplicacion
console.log(a / b)  //Division

console.log(a % b)  //Modulo
console.log(a ** b) //Exponente

//Incremento
a++
console.log(a)

//Decremento
b--
console.log(b)

//Operadores de asignacion

let myVariable = 4
console.log(myVariable)
myVariable +=2  //suma con asignacion 
console.log(myVariable)

console.log("-----> asignacion <-------")

myVariable -= 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)

//Operadores con operacion 

console.log("-----> Operadores <-------")
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6)
console.log(a == 'a')
console.log(a === a)    // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === '6')
console.log(a != 6)     //Desigualdad por valor
console.log(a !== '6')  // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == ' ')
console.log(0 == 'Hola')
console.log(0 === '')
console.log(undefined == null)
console.log(undefined === null)

// Operadores lógicos
console.log("-----> Operadores Logicos<-------")

//and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")