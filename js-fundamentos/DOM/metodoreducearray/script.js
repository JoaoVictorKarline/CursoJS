let parray = document.querySelector('#array')
let pesquisa = document.querySelector('#ipesquisa')
let result = document.querySelector('#res')
let botao = document.querySelector('#but')

let elementos_array = [1, 2, 3, 4]
let aux = []

parray.textContent = elementos_array

botao.addEventListener("click", () => {
    // Reduce permite fazer uma redução do Array

   result.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
    // Anterior começa com o primeiro elemento
    // Anterior vai ser a soma
        aux.push(anterior)
        return atual + anterior
    })

    
   result.innerHTML += "<br/>"+aux

})


