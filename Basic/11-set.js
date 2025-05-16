//set

//Declaracion

let mySet = new Set()

//Inicializacion

mySet = new Set(['Santiago', 'Figueroa', 'Santi', 29 , true])

console.log(mySet)

//Metodos comunes

//add and delete

mySet.add('fire950929@gmail.com')
console.log(mySet.delete(29))

console.log(mySet)

//Has

console.log(mySet.has('Figueroa'))
console.log(mySet.has(23))

//Size
console.log(mySet.size)

//Convertir en set a array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir Array en Set

mySet = new Set(myArray)
console.log(mySet)