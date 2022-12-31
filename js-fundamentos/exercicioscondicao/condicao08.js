let lado01 = 2
let lado02 = 2
let lado03 = 3

if (lado01 + lado02 > lado03 && lado01 + lado03 > lado02 && lado02 + lado03 > lado01) {
    if (lado01 == lado02 && lado01 == lado03) {
        console.log("Triângulo Equilátero")
    }
    else if (lado01 != lado02 && lado01 != lado03 && lado03 != lado02) {
        console.log('Triângulo Escaleno')
    } else {
        console.log('Triângulo Isósceles')
    }
} else {
    console.log('Não é um Triângulo')
}