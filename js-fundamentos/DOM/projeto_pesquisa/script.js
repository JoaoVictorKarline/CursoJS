let input_pesquisa = document.querySelector('#pesquisar')
let ol = document.querySelector('.lista_pai')
let lista_group = [...document.querySelectorAll('.lista')]

function remove() {
    lista_group.map((ele) => {
        ele.style.backgroundColor = 'white'
    })
}

input_pesquisa.addEventListener("input", () => {
    let pesquisa_valor = input_pesquisa.value
    let selecionado = undefined
    
    lista_group.forEach((ele) => {
        if (ele.textContent.toLowerCase() == pesquisa_valor.toLowerCase()) {
            selecionado = ele
        }
    })

    if (selecionado != undefined) {
        remove()
        selecionado.style.backgroundColor = 'blue'
    }

    if (selecionado == undefined) {
        remove()
    }

})
