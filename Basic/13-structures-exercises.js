// 1. Crea un array que almacene cinco animales
let myArray = ['Leon', 'Tigre', 'Cocodrilo', 'Puma', 'Gorila']
console.log('1.- Crea un array que almacene cinco animales \n' + myArray + "\n")

// 2. Añade dos más. Uno al principio y otro al final
myArray.push('Hipopotamo')
myArray[0] = "Conejo"
console.log('2.- Añade dos más. Uno al principio y otro al final \n' + myArray+ "\n")

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)
console.log('3.- Elimina el que se encuentra en tercera posición \n' +  myArray+ "\n")
// 4. Crea un set que almacene cinco libros
let mySet = new Set(["1)El programador pragmático", "2)Código limpio", "3)De cabeza a los patrones de diseño", "4)El programador limpio", "5)El mítico hombre-mes"])
console.log('4.- Crea un set que almacene cinco libros.')
console.log(mySet)
// 5. Añade dos más. Uno de ellos repetido
mySet.add("6)Código completo")
mySet.add('1)El programador pragmático')
console.log('5. Añade dos más. Uno de ellos repetido')
console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete('1)El programador pragmático')
console.log('6. Elimina uno concreto a tu elección')
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    ['01', 'Enero'],
    ['02', 'Febrero'],
    ['03', 'Marzo'],
    ['04', 'Abril'],
    ['05', 'Mayo'],
    ['06', 'Junio'],
    ['07', 'Julio'],
    ['08', 'Agosto'],
    ['09', 'Septiembre'],
    ['10', 'Octubre'],
    ['11', 'Noviembre'],
    ['12', 'Diciembre']
])
console.log('7.- Crea un mapa que asocie el número del mes a su nombre')
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log('\n8. Comprueba si el mes número 5 existe en el map e imprime su valor')
console.log(myMap.has('05') + ' <--> ' + myMap.get('05'))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log('\n9. Añade al mapa una clave con un array que almacene los meses de verano')
myMap.set('mesesVerano', ['Junio','Julio','Agosto'])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("10. Crea un Array, transfórmalo a un Set y almacénalo en un Map \n" + myArray + "\n")
let newSet = new Set(myArray)
console.log(newSet)

myMap.set('animales', newSet)
console.log(myMap)