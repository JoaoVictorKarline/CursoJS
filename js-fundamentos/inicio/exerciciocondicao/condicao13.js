let escolha = 'Álcool'
let gasolina = 30
let alcool = 20
let preco = 0


if (escolha == 'Gasolina') {
    preco = gasolina*2.50
    if(gasolina<20){
        preco = preco - (preco*(4/100))
        console.log(`Você irá Pagar ${preco}`)
    }
    else{
        preco = preco - (preco*(6/100))
        console.log(`Você irá Pagar ${preco}`)
    }
} else {
    preco = alcool*1.90
    if(alcool<20){
        preco = preco - (preco*(3/100))
        console.log(`Você irá pagar ${preco} Reais`)
    }
    else {
        preco = preco - (preco*(5/100))
        console.log(`Você irá pagar ${preco} Reais`)
    }
}