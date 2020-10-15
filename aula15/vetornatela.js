let valores = [8, 1, 7, 4, 2, 9]


valores.sort()//ordenando o codigo

console.log('padrão: ')
for(let valor = 0; valor < valores.length; valor ++){
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
}

//simplificando o codigo com o IN 
console.log('')
console.log(`Utilizando o IN: `)//só funciona para arrays e objetos
for(let valor in valores){
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)   
}