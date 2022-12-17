let valor01 = 10
let valor02 = 10
let opcao = '+'
let total = 0

switch (opcao) {
    case '+':
        total = valor01 + valor02
        console.log(`O resultado da Adição é ${total}`)
        break

    case '-':
        total = valor01 - valor02
        console.log(`O resultado da Subtração é ${total}`)
        break

    case '/':
        total = valor01 / valor02
        console.log(`O resultado da Divisão é ${total}`)
        break

    case '*':
        total = valor01 * valor02
        console.log(`O resultado da Multiplicação é ${total}`)
        break
}