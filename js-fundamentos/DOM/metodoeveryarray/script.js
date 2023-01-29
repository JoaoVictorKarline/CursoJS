let parray = document.querySelector('#array')
let pesquisa = document.querySelector('#ipesquisa')
let result = document.querySelector('#res')
let botao = document.querySelector('#but')

let elementos_array = [109,58,85,25,35,21,33,18,19,19,20]
parray.textContent = elementos_array

botao.addEventListener("click", ()=>{

    let retorno = elementos_array.every((ele, i)=>{
         // Se todos os elementos do array equivalerem a essa regra ele retorna true se não vai retornar falso 

        if(ele<18){
            result.innerHTML += `Array Não conforme na posição ${i}`
        } else {
            return ele>=18
        }

    })
    
    if(retorno){
        result.innerHTML += 'True'
    } else {
        result.innerHTML += 'False'
    }
    console.log(retorno)
})

