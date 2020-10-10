//criando imagens dinamicamente pelo javascript:


function verificar() {
    //window.alert('funcionou')
    var data = new Date()
    var ano = data.getFullYear() //pega os 4 digitos
    var fano = document.getElementById('txtano')//formulario ano
    var res = document.querySelector('div#res') //tanto faz de cima ou de baixo

    if (fano.value.length == 0 || Number(fano.value) > ano) { //Number(fano.value)...
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //obs esta no plural
        var idade = ano - Number(fano.value)//calculando a idade
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''//recebe vazio por que sera escolhido no formulario apos o calculo
        var img = document.createElement('img')//cria um elemento img 
        img.setAttribute('id', 'foto')//apos criado o elemento img ele recebe o atributo id e foto

        
            //homem
        
        if (fsex[0].checked) {//verifica o sexo, se o fsex (mas ou fem) for 0 = masculino
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebe-masculino.png')//insere o atributo, chamando imagem via javascript

            } else if (idade < 33) {
                //jovem
                img.setAttribute('src', 'jovem-masculino.png')

            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'adulto-masculino.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'idoso-masculino.png')
            }
            
            
            //mulher

        } else if (fsex[1].checked) {//verifica o sexo, se for fsex for 1 = feminino
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebe-feminino.png')

            } else if (idade < 33) {
                //jovem
                img.setAttribute('src', 'jovem-feminino.png')

            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'adulto-feminino.png')

            } else {
                //idoso
                img.setAttribute('src', 'idosa-feminino.jpg')

            }

        }
        res.style.textAlign = 'center' //alinhando o texto ("css" via javascript)
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//inserir imagem criada acima no (img.setAttribute) appendChild recebe o elemento
    }

}