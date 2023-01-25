let divclass = [...document.getElementsByClassName('bt')]
let divright = document.querySelector('.containerright')
let divleft = document.querySelector('.buttongroup')
let button = document.querySelector('#but')
let buttonvoltar = document.querySelector('#buta')

divclass.map((ele) => {
    ele.addEventListener("click", (evt) => {
        let el = evt.target
        el.classList.toggle('destaque') // Toggle significa alternar
    })
})

button.addEventListener("click", () => {
    let selecionados = [...document.querySelectorAll('.destaque')]

    selecionados.map((ele) => {
        if (ele.classList.contains('destaque') && ele.classList.contains('bt')) {
            divright.appendChild(ele)
            divright.style.display = 'flex'
        } 
    })


})

buttonvoltar.addEventListener("click", () => {
    let naoselecionados = [...document.querySelectorAll('.bt')]

    naoselecionados.map((ele) => {
        if(ele.classList.contains('bt') && !ele.classList.contains('destaque'))
        divleft.appendChild(ele)
    })
})