function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')

    if(fano.value == 0 || fano.value > ano){
        window.alert("Dados Inválidos")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            
            if(idade>0 && idade<=12){
                img.setAttribute('src', 'bebehomem.png')
            }
            else if(idade>12 && idade<21){
                img.setAttribute('src', 'jovemhomem.png')
            }
            else if(idade>=21 && idade <=55){
                img.setAttribute('src', 'adultohomem.png')
            }
            else{
                img.setAttribute('src', 'idoso.png')
            }

        }else{
            genero = 'Mulher'

            if(idade>0 && idade<=12){
                img.setAttribute('src', 'bebemulher.png')
            }
            else if(idade>12 && idade<21){
                img.setAttribute('src', 'jovemmulher.png')
            }
            else if(idade>=21 && idade <=55){
                img.setAttribute('src', 'adultomulher.png')
            }
            else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}