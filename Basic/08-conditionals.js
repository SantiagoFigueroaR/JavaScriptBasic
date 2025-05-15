//if, else if, else 
const age = 16

if (age == 27){
    console.log("La edad es 27")
}else if(age < 18 ){
    console.log(`Eres menor de edad, tienes: ${age}`)
}
else{
    console.log(`Tu edad es ${age}`)
}

//Operadores ternarios

const message = age < 18 ? "Eres menor de edad" : "Eres mayor de edad"
console.log(message)

//Switch
let day = 7
let dayName 

switch(day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de dia incorrecto"   
}
console.log(dayName)