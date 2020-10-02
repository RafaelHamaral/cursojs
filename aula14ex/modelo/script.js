function contar() {

    //criando as variaveis que vou chamar na funcao - o id vem de modelo.html 
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //verificar se esta faltando passo - caso nao preenchido vira uma mensagem de alerta
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //length verifica o tamanho dentro da variavel (no caso o valor)

        res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO] Faltam dados!')
       
    } else {
        // criando variaveis para executar no contador
        res.innerHTML = 'Contando: </br>' //caso tudo preenchido atualiza a frase anterior para contando
        let i = Number(ini.value) 
        let f = Number(fim.value) //transformando a variavel para numero
        let p = Number(passo.value)
         //se o passo for 0 s
    if (p <= 0 ) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
        //esse caso só vai funcionar se i < f
        if (i < f) { 
            //contagem crescente
            for (let c = i; c <= f; c += p) { 
                res.innerHTML += `${c} \u{1F449}` //unicode emoji list
            } 
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }   
        res.innerHTML += `\u{1F3C1} FIM!`
    }
}