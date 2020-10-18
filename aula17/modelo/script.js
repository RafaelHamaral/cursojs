//Analisador de numeros. De acordo com os numeros inseridos de 1 a 100 serao adicionados ha um painel os valores e no final mostraremos quantos numeros possuem, o valor deles, a media e a soma desses valores

//recebendo as variaveis - controles basicos 
  let add = document.querySelector('input#fadd')
  let lista = document.querySelector('select#frec')
  let resp = document.querySelector('div#res')
  let valor = [] //array - sera utilizado para fazer a analise de dados

  //criando as funções de validação de valores
  function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
      return true
    } else {
      return false
    }  
  }

  function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
      return true
    } else {
      return false
    }
  }

//validando se as funções isNumero e inLista são numeros e se nao estao na lista
function adicionar(){
    if(isNumero(add.value) && !inLista(add.value, valor)){//!inLista -- só vai adicionar se NAO estiver inLista 
      valor.push(Number(add.value))//adicionando valor no meu vetor
      let item = document.createElement('option')
      item.text = `Valor ${add.value} adicionado`
      lista.appendChild(item)
      resp.innerHTML = '' //limpa o resultado 
    }else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    //limpa o campo e mantem o cursor no campo 
    add.value = '' 
    add.focus()
} 

function finalizar(){
  if(valor.length == 0){
    window.alert('Selecione valores antes de finalizar')
  } else {
    let tot = valor.length
    //verificar o maior e o menor numero - 0 = primeira posicao
    let maior = valor[0]
    let menor = valor[0]
    let soma = 0
    let media = 0
    for(let pos in valor){
      soma += valor[pos]
      if(valor[pos] > maior)
      maior = valor[pos]
      if(valor[pos] < menor)
      menor = valor[pos]
    }
    media = soma / tot
    resp.innerHTML = ''
    resp.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
    resp.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    resp.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    resp.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
    resp.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
  }
}

