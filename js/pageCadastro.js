
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
// let nome = document.querySelector("#nome")
// let sobrenome = document.querySelector("#sobrenome")
// let idade = document.querySelector("#idade")
// let rua = document.querySelector("#rua")
// let numero = document.querySelector("#numero")
// let bairro = document.querySelector("#bairro")
let tel = document.querySelector("#tel")
// let genero = document.querySelector("#genero")
// let data = document.querySelector("#data")

// // EVENTO DE NOME

// // EVENTO IDADE
// sobrenome.addEventListener("blur", function(){
//     if(sobrenome.value == ""){
//         sobrenome.style.outline = "1px solid red"}
//     else{
//         sobrenome.style.outline = "1px solid green"
//     }
// })
// rua.addEventListener("blur", function(){
//     if(rua.value == ""){
//         rua.style.outline = "1px solid red"}
//     else{
//         rua.style.outline = "1px solid green"
//     }
// })

// bairro.addEventListener("blur", function(){
//     if(bairro.value == ""){
//         bairro.style.outline = "1px solid red"}
//     else{
//         bairro.style.outline = "1px solid green"
//     }
// })

// tel.addEventListener("blur", function(){
//     if(tel.value == ""){
//         tel.style.outline = "1px solid red"}
//     else{
//         tel.style.outline = "1px solid green"
//     }
// })


// let cpf = document.querySelector("#cpf")
// let cartao = document.querySelector("#cartao")
// let aux = ""

// cpf.addEventListener('keyup', function(event){
//      if(event.keyCode != 32 && event.keyCode != 46){
//         console.log(cpf.value.length)
//         let i = cpf.value.length
//         aux = cpf.value
//         if (i == 3 || i == 7){
//             cpf.value = aux + "."
//         }
//         if (i == 11){
//             cpf.value = aux + "-"
//         }
    
//     }})


// cartao.addEventListener('keyup', function(event){
//     if (event.keyCode != 32 && event.keyCode != 46){
//         let i = cartao.value.length
//         aux = cartao.value
//         if (i == 4 || i == 9 || i == 14){
//             cartao.value = aux + " "
//         }
//     }
// })

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

// let infoPessoal = document.querySelector("#infoPessoal")
// let infoCartao = document.querySelector("#infoCartao")
// let infoFinalizando = document.querySelector("#infoFinalizando")
// let btnPessoal = document.querySelector("#prox")
// let btnCartao = document.querySelector("#next")

// infoCartao.classList.add("d-none")
// infoFinalizando.classList.add("d-none")

// // btnPessoal.addEventListener('click', function(){
// //     infoPessoal.classList.add("d-none")
// //     infoCartao.classList.replace("d-none", "d-block")

// // })

// // btnCartao.addEventListener('click', function(){
// //     infoCartao.classList.add("d-none")
// //     infoFinalizando.classList.replace("d-none", "d-block")
// // })

// Example starter JavaScript for disabling form submissions if there are invalid fields
