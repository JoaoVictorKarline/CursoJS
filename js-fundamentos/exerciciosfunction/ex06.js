function triangulo(base, altura) {
    this.base = base
    this.altura = altura
    let area = (base * altura) / 2

    return area
}

function quadrado(lado) {
    let area = lado*lado
    return area
}

function circulo(rai){
    const pi = Math.PI
    let base = pi*rai**2
    return base
}

console.log(triangulo(7, 7))
console.log(quadrado(5))
console.log(circulo(3).toFixed(2))
