function tabuada(){
var num = document.getElementById('num')
var numero = Number(num.value)
var res = document.getElementById('res')
var tab = document.getElementById('seltab')



if(num.value == 0 ){
    window.alert("Inválido")
}else{

    var c = 1
    var r = 1
    tab.innerHTML = ''
    do{
        
        r = numero*c
        var item = document.createElement('option')
        item.text = `${numero} x ${c} = ${r}`
        tab.appendChild(item)
        c = c+1
        
        

    }while(c<=10)
    
}
}