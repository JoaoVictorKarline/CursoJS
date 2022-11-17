function fat(num){
    let fatorial = 1
    for (var n = num; n>1; n--){
        fatorial *= n   
        
    }return fatorial
}

console.log(fat(5))

//Pode - se escrever o fatorial sendo n! = n * (n-1)! | 5! = 5 * (5-1)!