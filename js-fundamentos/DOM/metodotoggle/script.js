let div_direita = document.querySelector('.containerright')
let botao_adicionar = document.querySelector('#add')
let botao_remover = document.querySelector('#remov')
let botao_mostrar_curso = document.querySelector('#mostrar')
let curso = document.querySelector('#inomecurso')

const tirar_selecao = () => {
    let selecionados = [...document.querySelectorAll('.destaque')]

    selecionados.map((el) => {
        el.classList.remove("destaque")
    })


}

botao_adicionar.addEventListener("click", (evento) => {
    evento.preventDefault()

    let curso = document.querySelector('#inomecurso')
    let curso_valor = curso.value
    curso.style.border = '1px solid black'

    if (curso_valor == '') {
        curso.style.border = '1px solid red'
    }

    else {
        // Vai criar um novo elemento DIV que será armazenada dentro da div_direita
        let nova_div = document.createElement('div')
        nova_div.setAttribute('class', 'bt')
        nova_div.textContent = curso_valor

        div_direita.appendChild(nova_div)

        nova_div.addEventListener("click", (evt) => {
            tirar_selecao()
            evt.target.classList.toggle('destaque')
        })


    }

    curso.value = ''
})

botao_remover.addEventListener("click", (evento) => {
    evento.preventDefault()
    try {
        let selecionado = document.querySelector('.destaque')
        div_direita.removeChild(selecionado)
    }

    catch (error) {
        alert('Selecione um Curso')
    }

})

botao_mostrar_curso.addEventListener("click", (evento) => {
    evento.preventDefault()

    try {
        let radios = [...document.querySelectorAll('.radio')]

        let radio = radios.filter((ele) => {

            if (ele.checked) {
                return ele
            }
        })

        let div_mostrar = radio[0].parentNode.nextSibling.textContent
        alert(div_mostrar)

    } catch (error) {
        alert('Selecione um curso')
    }

})

