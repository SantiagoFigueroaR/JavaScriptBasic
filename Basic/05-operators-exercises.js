
let a = 4
let b = 6
// 1. Crea una variable para cada operación aritmética
let sum = a + b
let res = a - b 
let div = a / b
let mul = a * b

let mod = a % b
let exp = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let sum2 = sum += 2
let res2 = res -= 2
let div2 = div /= 2
let mul2 = mul *= 2

let mod2 = mod %= 2
let exp2 = exp **= 2
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log( a < b)
console.log(a <= b)
console.log(a == a)
console.log(a != 6)
console.log(sum > res)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log( a > b)
console.log(a >= b)
console.log(a === 6)
console.log(5 > 10 && 15 > 20)
console.log(sum < res)
// 5. Utiliza el operador lógico and
console.log(5 > 10 && 15 > 20)
// 6. Utiliza el operador lógico or
console.log(5 < 10 || 15 < 20)
// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación
console.log(!true)
// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas