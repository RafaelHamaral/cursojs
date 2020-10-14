let num = [5, 8, 2, 9, 3]

num.push(1)//método interno - insere o indice de maneira automatica com o valor 1 (acrescenta valor ao array)
num.sort() //método interno - coloca os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


for(let pos = 0; pos < num.length; pos ++){
    console.log(`posição ${num[pos]}`)
}

//buscar valores dentro de um vetor (indice)  --- index.Of() *se nao encontrar ele retorna -1.
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
console.log(`O valor 8 esta na posição ${pos}`)
}




