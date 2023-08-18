let lista = document.querySelector("#listas")

async function carregarDados(){
    const url ="https://escola.free.beeceptor.com/all"

    const resultado = await fetch(url)

    const dados = await resultado.json()

    console.log(dados)

    for(const itens of dados){
        const divizera = document.createElement("div")
        const linha1 = document.createElement("button")
        const linha2 = document.createElement("button")
        const linha3 = document.createElement("button")
        const linha4 = document.createElement("button")
        const linha5 = document.createElement("button")


        divizera.classList.add("col-lg-4","col-md-6", "list-group")
        linha1.classList.add("list-group-item", "list-group-item-action active")
        linha2.classList.add("list-group-item", "list-group-item-action")
        linha3.classList.add("list-group-item", "list-group-item-action")
        linha4.classList.add("list-group-item", "list-group-item-action")
        linha5.classList.add("list-group-item", "list-group-item-action")

        linha1.textContent = itens.nome_escola
        linha2.textContent = itens.descrição_resumida
        linha3.textContent = itens.endereço
        linha4.textContent = itens.telefone
        linha5.textContent = itens.email

        divizera.appendChild(linha1)
        divizera.appendChild(linha2)
        divizera.appendChild(linha3)
        divizera.appendChild(linha4)
        divizera.appendChild(linha5)

        lista.appendChild(divizera)
    }
}

carregarDados()