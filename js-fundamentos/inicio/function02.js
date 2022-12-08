function soma(a, n) { //Não preciso usar Let, posso declarar direto no parâmetro
    console.log(a+n)

}

soma(3, 5)

function div(b=10,c=2){
    return b/c //Retorna
}

console.log(div()) //Chamo a função que retornou o valor