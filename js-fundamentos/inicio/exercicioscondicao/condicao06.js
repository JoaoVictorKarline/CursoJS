let salario = 2000
let percentual = 0
let novo_salario = 0

if (salario <= 280) {
    percentual = salario * (20 / 100)
    novo_salario = salario + percentual
    console.log(`Seu salário antes do Reajuste era de ${salario}`)
    console.log(`Seu novo Salário é de ${novo_salario}`)
    console.log(`Houve um aumento de 20%`)

} else if (salario > 280 && salario <= 700) {
    percentual = salario * (15 / 100)
    novo_salario = salario + percentual
    console.log(`Seu salário antes do Reajuste era de ${salario}`)
    console.log(`Seu novo Salário é de ${novo_salario}`)
    console.log(`Houve um aumento de 15%`)

} else {
    percentual = salario * (10 / 100)
    novo_salario = salario + percentual
    console.log(`Seu salário antes do Reajuste era de ${salario}`)
    console.log(`Seu novo Salário é de ${novo_salario}`)
    console.log(`Houve um aumento de 10%`)
}