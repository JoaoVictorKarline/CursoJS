let parray = document.querySelector('#array')
let pesquisa = document.querySelector('#ipesquisa')
let result = document.querySelector('#res')
let botao = document.querySelector('#but')

let elementos_array = [10,5,8,2,3,21,33,0]
parray.textContent = elementos_array

botao.addEventListener("click", ()=>{
    result.innerHTML = ' Resultado: '
    let retorno = elementos_array.find((ele, indice)=>{
        // Quando a função ser verdadeira ele para de iterar e retorna o elemento
        // Se não encontrar ele retorna undefined
        
        if(ele == Number(pesquisa.value)){
            result.innerHTML += `${ele} existe e é o elemento ${indice+1} do Array`
            return ele // Vai retornar sempre o elemento 
        } 
    })

    if(retorno == undefined){
        result.innerHTML += 'Valor não encontrado'
    }


    
})

