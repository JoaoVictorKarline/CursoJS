let divgroup = document.querySelector('.buttongroup')
let divc1 = document.querySelector('#c1')
let buttongroup = [...document.querySelectorAll('.bt')]
let cursos = ["Html", "Javascript", "Mysql", "PHP", "React"]

cursos.map((ele, indice)=>{
    let novoelemento = document.createElement('div')
    novoelemento.textContent = ele
    novoelemento.setAttribute("id", "c"+indice) // Cria um Id diferente para cada elemento
    divgroup.appendChild(novoelemento)
    novoelemento.classList.add('bt')
})

let novoelemento = document.createElement("div") // Crio um novo elemento da tag div
novoelemento.textContent = 'Vue'
novoelemento.classList.add('bt')
novoelemento.setAttribute("id", "c7") // Adiciona o método setAttribute e coloca como primeiro parâmetro o tipo e o segundo o nome
divgroup.appendChild(novoelemento) // Acrescento um filho na divgroup que foi o elemento que eu criei