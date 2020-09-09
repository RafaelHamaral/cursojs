function verificar() {
    //window.alert('funcionou')
    var data = new Date()
    var ano = data.getFullYear() //pega os 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') //tanto faz de cima ou de baixo

    if (fano.value.length == 0 || fano.value > ano) { //Number(fano.value)...
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //obs esta no plural
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebe-masculino.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-masculino.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-masculino.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'idoso-masculino.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebe-feminino.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-feminino.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-feminino.png')

            } else {
                //idoso
                img.setAttribute('src', 'idosa-feminino.jpg')

            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}