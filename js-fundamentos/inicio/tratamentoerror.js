function tratarerro(erro){
    throw 'Erro'
}

function imprimirnome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } 
    catch (e){
        tratarerro(e)

    }
}

const obj = { name: 'João' }

imprimirnome(obj)