let divgroup = document.querySelector('.buttongroup')
let divc1 = document.querySelector('#c1')
let buttongroup = [...document.querySelectorAll('.bt')]

console.log(divgroup.hasChildNodes()) // Verifica se o elemento tem filhos e retorna verdadeiro ou falso (Porém ele retora true mesmo que o elemento tenha um texto)

if (buttongroup[0].children.length > 0) {
    console.log('Tem elementos')
} else {
    console.log('Não tem elementos')
}

console.log(divgroup.firstChild) // Retorna o primeiro dado do elemento (Texto, número)
console.log(divgroup.firstElementChild.innerHTML = 'Teste') // Retorna o primeiro elemento filho

console.log(divgroup.children[3].innerHTML = 'Teste02') // Só o Children retorna um html collection de todos os elementos filhos

console.log(divc1.parentElement) // Retorna o Elemento pai com seus filhos
console.log(divc1.parentNode) // Retorna também o Elemento pai
console.log(divc1.parentNode.parentNode) // Retorna o avô