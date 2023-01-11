function vogais(palavra){  
    let pont = 0
    for(let i in palavra){
        if(palavra[i] == 'A' || palavra[i] =='a' || palavra[i] == 'E' || palavra[i] =='e' || palavra[i] == 'I' || palavra[i] =='i' || palavra[i] == 'O' || palavra[i] =='o' || palavra[i] == 'U' || palavra[i] =='u'){
            pont++
        }
    }
    return pont
}

console.log(vogais('Paralelepipedo'))



//for(let i in a){
    //console.log(a[i])
//}

