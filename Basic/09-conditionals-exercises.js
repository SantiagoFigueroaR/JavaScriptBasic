// if/else/else if/ternaria
let nombre = `Santiago`
let edad = 29
let apePat = `Figueroa`
let password = 1235


// 1. Imprime por consola tu nombre si una variable toma su valor
if (nombre == "Santiago"){
    console.log(`Tu nombre es Santiago `)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
if (nombre == "Santiago" && password == 12345){
    console.log(`Acceso concedido ${nombre}`)
}else{
    console.log("Acceso denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
if (edad == 0){
    console.log("Es 0")
}else if (edad > 0){
    console.log("Es Positivo")
}else{
    console.log("Es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
if(edad >= 18){
    console.log("Eres Mayor de edad, puedes votar")
}else if(edad <= 0){
    console.log("Ingresa edad valida")
}else{
    let dif = 18 - edad
    console.log(`Te faltan ${dif} años, para poder votar, tu edad es ${edad} años`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la  edad 
let status = edad >= 23 ? console.log("Eres adulto") : console.log("Tas pequeñ@")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let fecha = new Date()
let anio = fecha.getFullYear()
let mes = fecha.getMonth()

switch(mes){
    case 0:
        dayName = "Enero"
        break
    case 1:
        dayName = "Febrero"
        break
    case 2:
        dayName = "Marzo"
        break
    case 3:
        dayName = "Abril"
        break
    case 4:
        dayName = "Mayo"
        break
    case 5:
        dayName = "Junio"
        break
    case 6:
        dayName = "Julio"
        break
    case 7:
        dayName = "Agosto"
        break
    case 8:
        dayName = "Septiembre"
        break
    case 9:
        dayName = "Octubre"
        break
    case 10:
        dayName = "Noviembre"
        break
    case 11:
        dayName = "Diciembre"
        break
    default:
        dayName = "Numero de dia incorrecto"   
}
console.log(dayName)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let diasEnMes = new Date(anio, mes + 1, 0).getDate()
console.log(`El mes actual tiene ${diasEnMes} días.`)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma =2

switch(idioma){
    case 0:
        idioma = "Español/Spanish - Hola"
        break
    case 1:
        idioma = "Ingles/English - Hello"
        break
    case 2:
        idioma = "Frances/French - Bonjour"
        break
    case 3:
        idioma = "Aleman/German - Hallo"
        break
    case 4:
        idioma = "Italiano/italian - Ciao"
        break
    case 5:
        idioma = "Potugues/ Portuguese - Ola"
        break
    
    case 6:
        idioma = "Japones/Japanese - Konnichiwa"
        break
    case 7:
        idioma = "Arabe/Arabic - Marhaban"
        break    
}
console.log(idioma)
// 9. Usa un switch para hacer de nuevo el ejercicio 6

let fecha9 = new Date()
let anio9 = fecha.getFullYear()
let mes9 = fecha.getMonth()

switch(mes9){
    case 0:
        dayName = "Enero"
        break
    case 1:
        dayName = "Febrero"
        break
    case 2:
        dayName = "Marzo"
        break
    case 3:
        dayName = "Abril"
        break
    case 4:
        dayName = "Mayo"
        break
    case 5:
        dayName = "Junio"
        break
    case 6:
        dayName = "Julio"
        break
    case 7:
        dayName = "Agosto"
        break
    case 8:
        dayName = "Septiembre"
        break
    case 9:
        dayName = "Octubre"
        break
    case 10:
        dayName = "Noviembre"
        break
    case 11:
        dayName = "Diciembre"
        break
    default:
        dayName = "Numero de dia incorrecto"   
}
console.log(dayName)