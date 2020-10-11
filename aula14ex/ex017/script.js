//alert('Ola mundo')


function tabuada(){

    let numero = document.getElementById('num')
    let tab = document.getElementById('tab')

    //validando se o campo nao for preenchido
    if(numero.value.length == 0){
    window.alert('Por favor, digite um número!')
    }else {
        let n = Number(numero.value) //simplifica a variavel numero e tranforma a variavel em numero
        let c = 1 
        tab.innerHTML = '' //caso eu calcule outro numero ele limpa a tabuada anterior
    
    //resolvendo com o while
       /* while (c <= 10){
            let item = document.createElement('option')//criando um campo option dentro de <select></select> (no html) dinamicamente
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++*/

    //resolvendo com o for
            for(c == 1; c <= 10; c++){
                let item = document.createElement('option')//criando um campo option dentro de <select></select> (no html) dinamicamente
                item.text = `${n} x ${c} = ${n*c}`
                item.value = `tab${c}`
                tab.appendChild(item)//adiciona um elemento filho na variavel item (para gerar a proxima linha)
              
        }
    }

}