let botao_adicionar = document.querySelector('#butadd')
let botao_finalizar = document.querySelector('#butfinalizar')
let array = []
let div_array = document.querySelector('#div_arrays')
let div_finalizar = document.querySelector('#div_finalizar')
let div_principal = document.querySelector('#principal')


botao_adicionar.addEventListener("click",()=>{
    
    let numero1 = document.querySelector('#inumero')
    let numero = document.querySelector('#inumero').value
    
    if(array.indexOf(Number(numero)) != -1 ||Number(numero)>100||Number(numero)<1|| numero == ''){
        alert('Não foi possível adicionar valor')
    } else {array.push(Number(numero))
        let paragrafo = document.createElement('div')
        paragrafo.textContent = `Valor ${Number(numero)} Adicionado`
        paragrafo.setAttribute('class', 'divpar')

        div_array.appendChild(paragrafo)
    } 
    numero1.value = ''
    numero1.focus()
    let zerar = [...document.querySelectorAll('.finalizar')]
    zerar.map((ele)=>{
        ele.textContent = ''
    })
})



botao_finalizar.addEventListener("click",()=>{
    let total_valores = ()=>{
        let arraylenght = array.length
        return arraylenght
    }

    let maior = ()=>{
        let maior = array[0]
        array.map((ele)=>{
            if(ele>maior){
                maior = ele
            }
        })
        return maior
    }

    let menor = ()=>{
        let menor = array[0]
        array.map((ele)=>{
            if(ele<menor){
                menor = ele
            }
        })
        return menor
    }

    let soma = ()=>{
        let soma = 0
        array.map((ele)=>{
            soma+=ele
        })
        return soma
    }

    let media = ()=>{
        let media = 0
        array.map((ele)=>{
            media = soma()/total_valores()
        })
        return media
    }

    let zerar = ()=>{
        let elementos = [...document.querySelectorAll('.finalizar')]
        elementos.map((ele)=>{
            div_finalizar.removeChild(ele)
        })
    }

    if(array.length<1){
        alert('Adicione Valores')
    } else {
    
    let div_total_elementos = document.createElement('div')
    div_total_elementos.setAttribute('class','finalizar')
    div_total_elementos.textContent = `Ao todo temos ${total_valores()} Valores Cadastrados`
    
    let div_maior = document.createElement('div')
    div_maior.setAttribute('class','finalizar')
    div_maior.textContent = `O maior valor é o ${maior()}`

    let div_menor = document.createElement('div')
    div_menor.setAttribute('class','finalizar')
    div_menor.textContent = `O menor valor é o ${menor()}`

    let div_soma = document.createElement('div')
    div_soma.setAttribute('class','finalizar')
    div_soma.textContent = `A soma de todos os valores é ${soma()}`

    let div_media = document.createElement('div')
    div_media.setAttribute('class','finalizar')
    div_media.textContent = `A média da soma entre todos os elementos é ${media()}`
    
    zerar()

    div_finalizar.appendChild(div_total_elementos)
    div_finalizar.appendChild(div_maior)
    div_finalizar.appendChild(div_menor)
    div_finalizar.appendChild(div_soma)
    div_finalizar.appendChild(div_media)
}
})