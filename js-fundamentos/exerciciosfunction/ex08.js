let soma = (n1, n2)=>{return n1+n2 }
console.log(`Soma: ${soma(4,3)}`)

let sub = (n1,n2)=>{return n1-n2}
console.log(`Subtração: ${sub(4,3)}`)

let parimp = (v)=>{
    if(v%2==0){return 'Par'}
    else {return 'Ímpar'}
}

console.log(parimp(23))

let div = soma(3,3)/sub(4,2)
console.log(div)

let arraymai = (...valor) =>{
    let res = 0
    valor.map((ele)=>{
        if(ele>res){res = ele}
    })
    return res
}

console.log(arraymai(9,3,6,9,23))

let arraymen = (...valor)=>{
    let res = valor[0]
    valor.map((ele)=>{if(ele<res){res = ele}})
    return res
}

console.log(arraymen(23,4,33,3,2))

let somaarray = arraymen(2,3,4,2,5)+arraymai(1,6)

function somaa(...valores){
    this.soma = 0
    for(let pos = 0; pos<valores.length;pos++){
        this.soma += valores[pos]
    }
    return this.soma
}

console.log(somaa(2,3,4,5,3,5,1))

function strin(str){
    let num = str.length
    return num
}

console.log(strin('Abacates'))

let ab = (str, ca)=>{
    let qnt = 0
    this.str = [...str]
    this.str.map((ele)=>{
        if(ele.toLowerCase() == ca.toLowerCase()){
            qnt += 1
        }
    })
    
    return `A quantidade que o ${ca} Aparece em ${str} é de ${qnt}`
}

console.log(ab('AbacateaA', 'a'))