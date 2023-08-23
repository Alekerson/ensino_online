let cpf = document.querySelector("#cpf")
let aux = ""

cpf.addEventListener('keyup', function(event){
     if(event.keyCode != 32 && event.keyCode != 46){
        console.log(cpf.value.length)
        let i = cpf.value.length
        aux = cpf.value
        if (i == 3 || i == 7){
            cpf.value = aux + "."
        }
        if (i == 11){
            cpf.value = aux + "-"
        }
    
    }})

let cartao = document.querySelector("#cartao")

cartao.addEventListener('keyup', function(event){
    if (event.keyCode != 32 && event.keyCode != 46){
        let i = cartao.value.length
        aux = cartao.value
        if (i == 4 || i == 9 || i == 14){
            cartao.value = aux + " "
        }
    }
})

let tel = document.querySelector("#tel")

tel.addEventListener('keypress', function(event){
    if (event.keyCode != 32 && event.keyCode != 46){
        let i = tel.value.length
        aux = tel.value
        console.log(tel.value.length)
        if(i == 0)
            tel.value = aux + "("
        if(i == 3)
            tel.value = aux + ")"
    }
})