//array

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = ['Santiago', 'Figueroa', 'Santi', 29 , true]
myArray2 = new Array('Santiago', 'Figueroa', 'Santi',29, false)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = 'Santiago'
myArray2[1] = 'Figueroa'
//myArray2[0] = 29

console.log(myArray2)

myArray = new Array(3)
myArray[2] = 'Santiago'
myArray[1] = 'Figueroa'
//myArray[0] = 2

console.log(myArray)

//Metodos Comunes 

myArray = []

//push and pop

myArray.push('Itzel')
myArray.push('Sanchez')
myArray.push(30)

console.log(myArray)

myArray.pop()

console.log(myArray)

console.log(myArray.shift())

console.log(myArray)

myArray.unshift('Santiago',' Figueroa')

console.log(myArray)

//length and clear

console.log(myArray.length)

myArray = []

console.log(myArray)

//Slice

myArray.push('Santiago', 'Figueroa', 'Santi', 29 , true)
let myNewArray = myArray.slice(1, 4)

console.log(myArray)
console.log(myNewArray)

//Splice
myArray.splice(1, 2)
console.log(myArray)

myArray.splice(1, 2 , "Nuevo")
console.log(myArray)
