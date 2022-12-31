// Quero contar até 100 mas fazer isso Manualmente não seria viável 

// Console.log(1), console.log(2), console.log(3)

//Para fazer uma repetição usa a estrutura loop

let s = 0


while(s<100){
    s += 1
    console.log(s)
}




///////////////////// Ou ////////////////////////



for(let a=100; a<=200; a++){
    if(a%2==0){
        console.log(`O número ${a} é Par`)
    }else{
        console.log(`O número ${a} é ímpar`)
    }
}


///////////////////////////////////////////////////////



let fatias_pizza = 10

while(fatias_pizza>0){
    fatias_pizza = fatias_pizza -1
    console.log('Você comeu uma fatia!')
}

// Enquanto condição for verdadeira execute determinada ação


