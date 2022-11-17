let numero = document.getElementById('txtnum')
let numeros = []
let resultado = document.getElementById('res')
let lista = document.getElementById('lista')

function adicionar(){
    
    
    if(Number(numero.value) == 0 || Number(numero.value) > 100){
        window.alert("Número Inválido")
            
        }else{

            numeros.push(Number(numero.value))
            let item = document.createElement('option')
            item.text = `Valor ${numero.value} Adicionado.`
            lista.appendChild(item)
            resultado.innerHTML = ''
            
    
        }
       numero.value = ''
       numero.focus()

    }
    
function finalizar(){
 
    if(numeros.length == 0 ){
        alert("Digite um  Valor")
    }else{
     
    let menor = numeros.sort()  
    let tot = numeros.length
   
    resultado.innerHTML += `<p>Ao todo temos ${tot} Números cadastrados</p>`
    resultado.innerHTML += `<p>O menor número é ${menor[0]} </p>`

    let maior = menor.reverse()
    resultado.innerHTML += `<p>O maior Número é ${maior[0]} </p>`

    let soma = 0
    for(let pos in numeros){
        
      
        soma +=  numeros[pos];
       
        
    }

    resultado.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
    resultado.innerHTML += `<p>A Média dos valores é: ${soma/tot}`
  
    
}
}




