let num01 = 3
let num02 = 2
let num03 = 10

if(num01>num02 && num01>num03){
    console.log(`Número ${num01} é o Maior`)
}
else if(num02>num01 && num02>num03){
    console.log(`Número ${num02} é o Maior`)
}
else if(num03>num01 && num03>num02){
    console.log(`Número ${num03} é o Maior`)
}
else{
    console.log(`Não existem um número maior`)
}