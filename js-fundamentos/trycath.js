// Evita que o erro estoure no console

let principal = ()=>{
    try {
        // Tentativa de execução do bloco
       codigo
    } catch (error) { // Parâmetro é a referência do erro
        // Se não conseguir ele cai aqui
        console.log(`Não é possível executar devido ao erro ${error}`)
    }
    

}

principal()