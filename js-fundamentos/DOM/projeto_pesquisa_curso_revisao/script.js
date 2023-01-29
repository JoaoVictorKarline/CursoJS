let div_direita = document.querySelector('.containerright')
let botao_adicionar = document.querySelector('#add')
let botao_remover = document.querySelector('#remov')
let botao_mostrar_curso = document.querySelector('#mostrar')
let curso = document.querySelector('#inomecurso')

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

        // Cria uma nova DIV que irá armazenar o texto do input e será filha da DIV que foi criada acima
        let div_texto = document.createElement('div')
        div_texto.setAttribute('class', 'inptxt')
        div_texto.textContent = curso_valor

        // Cria a DIV que irá armazenar o input radio
        let div_radio = document.createElement('div')
        div_radio.setAttribute('class', 'divinputradio')

        // Cria o input Radio
        let input_radio = document.createElement('input')
        input_radio.setAttribute('type', 'radio')
        input_radio.setAttribute('class', 'radio')
        input_radio.setAttribute('name', 'nome') // Todas com o mesmo nome permite que que apenas uma seja checada

        // Adiciona o input radio na Div do Radio irmã da div texto
        div_radio.appendChild(input_radio)

        nova_div.appendChild(div_radio)
        nova_div.appendChild(div_texto)
        div_direita.appendChild(nova_div)


    }

    curso.value = ''
})

botao_remover.addEventListener("click", (evento) => {
    evento.preventDefault()
    try {
        let radios = [...document.querySelectorAll('.radio')] // Cria um array com todos os input radio

        let radio = radios.filter((ele) => { // Método filter retorna um novo array filtrado com as informações que eu quero para a variável radio

            if (ele.checked) {
                return ele
            }
        })

        let div_removida = radio[0].parentNode.parentNode
        div_direita.removeChild(div_removida)

    } catch (error) {
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

