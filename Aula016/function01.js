function parimp(n) { // n é o Parâmetro
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}

let res = parimp(7) // Criei uma variável para receber a Chamada para a ação, Fez o n receber 4
console.log(res)