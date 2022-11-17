function carregar() {

var mensagem = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()


mensagem.innerHTML = `Agora são ${hora} : ${minutos}`

if(hora>=0 && hora<12){
    img.src = 'manha.png'
    document.body.style.backgroundColor = '#f9d487'
    img.style = 'border-radius: 100%'

}else if(hora>=12 && hora<18){
    img.src = 'tarde.png'
    document.body.style.backgroundColor = 'orange'
    img.style = 'border-radius: 100%'
}
else{
     img.src = 'noite.png'
     document.body.style.backgroundColor = 'black'
     img.style = 'border-radius: 100%'
}
}

