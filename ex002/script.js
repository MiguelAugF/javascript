function Ver(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('Verifique os dados. Tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/M-Criança.jpg')
            } else if(idade >=10 && idade <21){
                //jovem
                img.setAttribute('src', 'imagens/M-Jovem.jpg')
            } else if(idade <50){
                //adulto
                img.setAttribute('src', 'imagens/M-Grande.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/Idoso.jpg')
            }
        } else if(fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/F-Criança.jpg')
            } else if(idade >=10 && idade <21){
                //jovem
                img.setAttribute('src', 'imagens/F-Jovem.jpg')
            } else if(idade <50){
                //adulto
                img.setAttribute('src', 'imagens/F-Grande.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/Idosa.jpg')
            }   
        res.appendChild(img)
    }
}
}