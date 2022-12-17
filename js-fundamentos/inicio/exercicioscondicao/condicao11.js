let telefonou = 'sim'
let esteve_no_local = 'nao'
let mora_perto = 'nao'
let pontos = 0

if (telefonou == 'sim') {
    pontos = pontos + 1
}

if (esteve_no_local == 'sim') {
    pontos = pontos + 1
}

if (mora_perto == 'sim') {
    pontos = pontos + 1
}

if (pontos >= 3) {
    console.log('Assassino')
}
else if (pontos == 2) {
    console.log('Suspeito')
}
else {
    console.log('Liberado')
}