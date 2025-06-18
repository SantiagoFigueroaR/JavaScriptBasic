//for

for(let i = 0 ; i < 5; i++){
    console.log(`For #${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < numbers.length; i++){
    console.log( `For:  #${numbers[i]}`)
}

//While
let i = 0
while(i < 5){
    console.log(`While: #${i}`)
    i++
}

//Do-while

i = 6
do{
    console.log(`Do-While: # ${i}`)
    i++    
}while(i < 5)

//For Of
const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
]
)
const myString = 'Hola, JS'

for (let value of myString){
    console.log(value)
}

for (let value of myArray){
    console.log(value)
}

for(let value of mySet){
    console.log(value)
}

for(let value of myMap){
    console.log(value)
}

//break and continue

for (let i = 0;i ,10; i++){
    if(i ==5){
        continue
    }else if (i ==7){
        break
    }
    console.log(`Break and continue: #${i}`)
}
