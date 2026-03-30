const gerarListaNumeros = function (){
    let lista = []
    for(let i = 1 ; i <= 10; i++){
        lista.push(i)
    }

    return lista
}

const realizarAdicao = function(num){
    let lista = []
    let numero = Number(num)
    for (let i = 1 ; i <= 10; i++){
        lista.push(numero = numero + 1)
    }

    return lista
}

const realizarSubtracao = function(num){
    let lista = []
    let numero = num

    for (let i = 1 ; i <= 10; i++){
        lista.push(numero = numero - 1)
    }

   return lista
}

const realizarMultiplicacao = function(num){
    let lista = []
    let numero = num

    for (let i = 1 ; i <= 10; i++){
        lista.push (numero * i)
    }

   return lista
}

const realizarDivisao = function(num){
    let lista = []
    let numero = num

    for (let i = 1 ; i <= 10; i++){

        let resultado = numero / i
        lista.push (resultado.toFixed(2))
    }

  return lista
}

const criarTabela = function (){
    const tabela = document.getElementById("tabela")
    tabela.innerHTML = ""
    const entrada = document.getElementById("entrada").value
    

        let listaNumero = gerarListaNumeros()
        let adicao = realizarAdicao(entrada)
        let subtracao = realizarSubtracao(entrada)
        let multiplicacao =realizarMultiplicacao(entrada)
        let divisao = realizarDivisao(entrada)
    
    
    for(let i = 0; i < 10; i++){
        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        


        tr.append(td1, td2, td3, td4, td5)
        tabela.appendChild(tr)

        td1.textContent = listaNumero[i]
        td2.textContent = adicao[i]
        td3.textContent = subtracao[i]
        td4.textContent = multiplicacao[i]
        td5.textContent = divisao[i]

    }
}




