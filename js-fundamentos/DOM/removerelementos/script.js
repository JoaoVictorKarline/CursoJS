let divgroup = document.querySelector('.buttongroup')
let divc1 = document.querySelector('#c1')
let buttongroup = [...document.querySelectorAll('.bt')]
let cursos = ["Html", "Javascript", "Mysql", "PHP", "React"]
let but = document.querySelector('#buta')

cursos.map((ele, indice) => {
    let novoelemento = document.createElement('div')
    novoelemento.textContent = ele
    novoelemento.setAttribute("id", "c" + indice) // Cria um Id diferente para cada elemento
    let novoicone = document.createElement("img")
    novoicone.setAttribute("src", "126468.png")
    novoicone.style.height = '20px'
    novoicone.style.position = 'relative'
    novoicone.style.marginLeft = '20px'
    novoicone.style.border = '1px solid red'
    novoicone.style.borderRadius = '50%'
    novoelemento.appendChild(novoicone)
    
    divgroup.appendChild(novoelemento)
    novoelemento.classList.add('bt')

    novoicone.addEventListener("click", (evt) => {
        console.log(evt.target)
        divgroup.removeChild(novoelemento)
    })

    
})

but.addEventListener("click", (evt)=>{
    window.location.reload(true)
})

