let but = document.querySelector('#botao')
let divconteudo = [...document.querySelectorAll('.bt')]
console.log(divconteudo)
let divright = document.querySelector('.containerright')
let divleft = document.querySelector('.containerleft')
let buttongroup = document.querySelector('.buttongroup')

divconteudo.map((ele)=>{
    ele.addEventListener("click", function elclick(evt){
        
        let el = evt.target
        el.classList.toggle('format') // Se o elemento estiver com a classe format vai ser removido a classe, se não vai ser adicionado
    }) 
    
})



but.addEventListener("click", ()=>{
    let selecionados = [...document.querySelectorAll('.format')]

    selecionados.map((ele)=>{
        divright.appendChild(ele)
        divright.style.flexDirection = 'column'

    })

    
    

    

    

})