function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
//var hora = 13
msg.innerHTML = `Agora são ${hora} horas e `+`${minuto} minutos`
    if(hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#d5d1b6'
     
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#e49078'
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#28495c'
    }

}