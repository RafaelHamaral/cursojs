function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5))

//passando parametros pré definidos

function soma(n1=0, n2=0) { //utilizo desta maneira porque assim caso a chamada venha sem algum dos valores ele /paraconsidera 0 ou outro numero que eu desejar 
    return n1 + n2
}

console.log(soma(5)) 



/// se eu nao passar nada de paramentro e nao enviar algum dado na chamada o valor sera NaN