let div_direita = document.querySelector('.containerright')

let botao_adicionar = document.querySelector('#add')
let botao_remover = document.querySelector('#remov')
let botao_mostrarcurso = document.querySelector('#mostrar')

botao_adicionar.addEventListener("click", (evt) => {
    evt.preventDefault()
    
    let curso = document.querySelector('#inomecurso')
    let curso_valor = curso.value
    curso.style.border = '1px solid black'

    if (curso_valor == '') {
        curso.style.border = '1px solid red'
    } else {

        let novo_elemento_div = document.createElement('div')

        let divtexto = document.createElement('div')
        divtexto.setAttribute('class', 'inptxt')
        let divinputradio = document.createElement('div')
        divinputradio.setAttribute('class', 'divinputradio')

        let inputradio = document.createElement('input')
        inputradio.setAttribute('type', 'radio')
        inputradio.setAttribute('class', 'radio')
        inputradio.setAttribute('name', 'radio')

        divinputradio.appendChild(inputradio)
        novo_elemento_div.appendChild(divinputradio)
        divtexto.textContent = curso_valor
        novo_elemento_div.appendChild(divtexto)
        
        novo_elemento_div.setAttribute('class', 'bt')
        div_direita.appendChild(novo_elemento_div)


    }

    
})

botao_remover.addEventListener("click", (evt)=>{
    evt.preventDefault()

    let inputradio = [...document.querySelectorAll('.radio')]
    
    let selecionadoradio = inputradio.filter((ele)=>{
        return ele.checked // Retorna o elemento que está checado em forma de array
    })

    let remover = selecionadoradio[0].parentElement.parentElement
    div_direita.removeChild(remover)
})

botao_mostrarcurso.addEventListener("click", (evt)=>{
    evt.preventDefault()

    let radio_selecionados = [...document.querySelectorAll('.radio')]
    let radio_selecionado = radio_selecionados.filter((ele)=>{
        return ele.checked
    })

    let textocurso = radio_selecionado[0].parentElement.nextSibling.textContent // Irmã mais próxima
    alert(textocurso)
})