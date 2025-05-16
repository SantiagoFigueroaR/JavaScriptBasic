//Map

//Declaracion

let myMap = new Map()
console.log(myMap)

//Inicializacion 

myMap = new Map([
    ['name', 'Santiago'],
    ['email', 'fire950929@gmail.com'],
    ['age', 29]
])
console.log(myMap)

//Metodos y propiedades

//Set

myMap.set('alias', 'Chelo')
myMap.set('name', 'SantiagoFigueroa')
console.log(myMap)

//Get

console.log(myMap.get('name'))
console.log(myMap.get('lastName'))

//has

console.log(myMap.has('lastName'))
console.log(myMap.has('age'))

//Delete

myMap.delete('age')
console.log(myMap)

//Keys, Values and entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//Size

console.log(myMap.size)

//Clear

myMap.clear()
console.log(myMap)