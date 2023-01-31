let div_direita = document.querySelector('.containerright')
let botao_adicionar = document.querySelector('#add')
let botao_remover = document.querySelector('#remov')
let botao_ver_curso = document.querySelector('#mostrar')

let cursos_destque = () => {
    let cursosarray = [...document.querySelectorAll('.destaque')]
    cursosarray.map((ele) => {
        ele.classList.remove('destaque')
    })
}

botao_adicionar.addEventListener("click", (evento) => {
    evento.preventDefault()
    let curso = document.querySelector('#inomecurso')
    let curso_valor = curso.value
    curso.style.border = '1px solid black'

    if (curso_valor == '') {
        curso.style.border = '1px solid red'
        curso.setAttribute("placeholder", 'Insira um curso')

    } else {
        let div_curso = document.createElement('div')
        div_curso.setAttribute("class", "bt")
        div_curso.textContent = curso_valor
        div_direita.appendChild(div_curso)

        div_curso.addEventListener("click", (evt) => {
            let div_disparada = evt.target
            cursos_destque()
            div_disparada.classList.toggle('destaque')

        })

    }

})

botao_remover.addEventListener("click", () => {
    try {
        let selecionado = document.querySelector('.destaque')
        div_direita.removeChild(selecionado)

    } catch (error) {
        alert('Selecione um curso')
    }
    
})

