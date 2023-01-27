let divgroup = document.querySelector('.buttongroup')
let divc1 = document.querySelector('#c1')
let buttongroup = [...document.querySelectorAll('.bt')]

divgroup.addEventListener("click", (evento)=>{ // Quando eu disparo um evento num elemento pai, os elementos filhos vão acionar o mesmo evento

    // O próprio evento vai para o primeiro parâmetro
    console.log(evento.target)
})

divc1.addEventListener("click", (evento)=>{
    evento.stopPropagation() // Para a propagação do evento dos elementos filhos
})

buttongroup.map((ele)=>{
    ele.addEventListener("click", (evento)=>{
        evento.stopPropagation()
    })
})