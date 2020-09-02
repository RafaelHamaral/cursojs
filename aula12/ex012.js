var agora = new Date() //pegando a hora do sistema
var hora = agora.getHours()//hora do meu sistema
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 1 && hora <= 4){
    console.log('Boa Madrugada!')
} else if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite')
}