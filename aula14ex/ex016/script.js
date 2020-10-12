//alert('Ola mundo')

function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')


    //verificar se os dados estao faltando
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {//length - quantas letras tem dentro
        res.innerHTML = 'Impossivel Contar!'
       // window.alert('[ERRO] Faltam dados!')
    
    //criando o contador    
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    //validação: passo nao pode ser menor ou igual a 0
        if (p <= 0){ 
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }

    //validação: contagem se inicio for menor que o final     
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}

//unicode.org para acessar aos emojis