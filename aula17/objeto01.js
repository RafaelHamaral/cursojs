//objetos em javascript.

//objetos alem de guardar valores, podem guardar funcionalidades(métodos)

let amigo = {
        nome: 'José',
        sexo: 'Masculino',
        peso: 85.4,
        engordar(p) {
            console.log(`Engordou ${p} kg.`)
            pp = p
            this.peso += p //this auto referencia ao objeto
        }}
        amigo.engordar(30)
        console.log(`${amigo.nome} é do sexo ${amigo.sexo} e engordou ${pp} kg e pesa ${amigo.peso}kg.`)

            //testando a funcao do livro - Javascript - O guia definitivo 
            function fatorial(n) {
                var produto = 1;
                var fator = n
                while (n > 1) {
                    produto *= n
                    n--
                }
                console.log(`O fatorial de ${fator} é ${produto}`)
            } 

        fatorial(5)