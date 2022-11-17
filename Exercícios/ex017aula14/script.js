function contar(){
    var ini = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        alert("Valores Nulos")
    }
    else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f)
        for(var c = i; c<=f; c+=p){ // Contagem Crescente
            res.innerHTML += `${c} \u{1f449}`
        }else{
            for(var c = i; c>=f; c-=p){ // Contagem descrescente
                res.innerHTML += `${c} \u{1f449}`
            }
        }
    }
    }
    
        
    

    
  
