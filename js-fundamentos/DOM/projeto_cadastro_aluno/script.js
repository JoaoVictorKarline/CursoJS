let botao = document.querySelector('#but')

botao.addEventListener("click", (evt) => {
    evt.preventDefault()
    
    let nome = document.querySelector('#inome').value
    let notatrab = document.querySelector('#inotatrab')
    let notatrabvalor = Number(notatrab.value)
    let notaprova = document.querySelector('#inotaprova')
    let notaprovavalor = Number(notaprova.value)

    if (notatrabvalor > 10 || notaprovavalor > 10) {

        alert('As Notas precisam ser entre 0 - 10')

    } else {
        let media = (notaprovavalor + notatrabvalor) / 2

        let tbody = document.querySelector('#corpotab')
        let novalinha = document.createElement('tr')
        let dadonome = document.createElement('td')
        let dadonotatrab = document.createElement('td')
        let dadonotaprova = document.createElement('td')
        let dadomedia = document.createElement('td')
        dadomedia.innerHTML = media
        dadonotaprova.innerHTML = notaprovavalor
        dadonome.innerHTML = nome
        dadonotatrab.innerHTML = notatrabvalor

        novalinha.appendChild(dadonome)
        novalinha.appendChild(dadonotaprova)
        novalinha.appendChild(dadonotatrab)
        novalinha.appendChild(dadomedia)

        tbody.appendChild(novalinha)

        if (media < 5) {
            novalinha.style.backgroundColor = ' #ff6961'
        } else if (media == 10) {
            novalinha.style.backgroundColor = '#add8e6'
        }

    }
})