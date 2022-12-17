let dia = 28
let mes = 12
let ano = 2022

if(dia<1 || dia>31){
    console.log('Data inválida')
}
else if(mes<1 || mes>12){
    console.log('Data Inválida')
}
else{
    console.log(`${dia}/${mes}/${ano}`)
}