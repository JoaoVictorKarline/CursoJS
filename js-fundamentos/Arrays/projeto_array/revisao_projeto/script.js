let botao_adicionar = document.querySelector('#butadd')
let botao_finalizar = document.querySelector("#butfinalizar")
let input_numero = document.querySelector('#inumero')
let array_valores = []
let div_array = document.querySelector('#div_arrays')
let div_finalizar = document.querySelector('#div_finalizar')

let zerar = ()=>{
    let array_divsfim = [...document.querySelectorAll('.finalizar')]
    array_divsfim.map((ele)=>{
        div_finalizar.removeChild(ele)
    })
}

botao_adicionar.addEventListener("click",()=>{
    let numero_valor = Number(input_numero.value) // Só pega os dados quando ocorre o evento 

    // Retorna o índice que está o numero_valor no array, se o dado não existir ele retorna -1
    if(array_valores.indexOf(numero_valor) != -1){
        alert('Valor já Existe')

    } else if(numero_valor>100 || numero_valor<1){
        alert('Por favor Selecione um valor entre 1-100')

    } else {
        array_valores.push(numero_valor)
        console.log(array_valores)
        zerar()
        let div_par = document.createElement('div')
        div_par.setAttribute('class','divpar')
        div_par.textContent = `Valor ${numero_valor} Adicionado`

        div_array.appendChild(div_par)
        
    } input_numero.value = '' // Zera o input
    input_numero.focus() // Vai voltar a focar

})

botao_finalizar.addEventListener("click", ()=>{
    
    let total_cadastrados = ()=>{
        return array_valores.length
    }

    let maior = ()=>{
        let maiorv = array_valores[0]
        array_valores.forEach((ele)=>{
            if (ele>maiorv){
                maiorv = ele
            }
        })

        return maiorv
    }

    let menor = ()=>{
        let menor = array_valores[0]
        array_valores.forEach((ele)=>{
            if (ele<menor){
                menor = ele
            }
        })

        return menor
    }

    let soma = ()=>{
        let soma = 0
        array_valores.forEach((ele)=>{
            soma+=ele
        })

        return soma
    }

    

    let totaltxt = document.createElement('div')
    totaltxt.setAttribute('class', 'finalizar')
    totaltxt.textContent = `Ao todo temos ${total_cadastrados()} Valores Cadastrados`

    let maiortxt = document.createElement('div')
    maiortxt.setAttribute('class', 'finalizar')
    maiortxt.textContent = `O Maior valor cadastrado é o ${maior()}`

    let menortxt = document.createElement('div')
    menortxt.setAttribute('class', 'finalizar')
    menortxt.textContent = `O menor valor cadastrado é o ${menor()}`

    let somatxt = document.createElement('div')
    somatxt.setAttribute('class', 'finalizar')
    somatxt.textContent = `A soma dos Elementos é ${soma()}`

    div_finalizar.appendChild(totaltxt)
    div_finalizar.appendChild(maiortxt)
    div_finalizar.appendChild(menortxt)
    div_finalizar.appendChild(somatxt)
})
