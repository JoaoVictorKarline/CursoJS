let nota01 = 10
let nota02 = 10
let media = (nota01+nota02)/2

if(media>=7 && media!=10){
    console.log(`Parabéns, Você passou com nota ${media}`)
}
else if(media == 10){
    console.log(`Aprovado com Distinção, Parabéns!`)
}
else{
    console.log('Infelizmente você reprovou :(')
}
