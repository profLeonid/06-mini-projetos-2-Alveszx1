

const criarListaNumeros = function(qtd){
    let listaNumeros = []
    for(let i = 1 ; i <= qtd ; i++){
        listaNumeros.push(i)
    }
    

   return listaNumeros

}



const definirNumerosPar = function(qtd){
    let lista = []
    let quantidade = qtd * 2 

    for( let i = 1 ; i <= quantidade ; i++ ){
        if(i % 2 === 0){
            lista.push(i)
        }
    }

   return lista

   
}
definirNumerosPar(10)



const definirNumerosImpar = function(qtd){
    let lista = []
    let quantidade = qtd * 2 

    for( let i = 1 ; i < quantidade ; i++ ){
        if(i % 2 !== 0){
            lista.push(i)
        }
    }

   return lista
   
}

definirNumerosImpar(10)


const definirMultiplos5 = function (qtd){
    let lista = []
    
    for(let i = 1 ; i <= qtd ; i++){
        lista.push(i * 5)
    }
    return lista
}


const definirPotencia = function(qtd){
    let lista = []
    for(let i = 0 ; i < qtd ; i++){
        lista.push(2 ** i)
    }

    return lista
}


const criarTabela = function (){
    const tabela = document.getElementById("tabela")
    tabela.innerHTML = ""
    const entrada = document.getElementById("entrada").value
    

    let listaNumero = criarListaNumeros(entrada)
        let numerosPares = definirNumerosPar(entrada)
        let numerosimpares = definirNumerosImpar(entrada)
        let multiplosDe5 = definirMultiplos5(entrada)
        let potencia = definirPotencia(entrada)
    
    
    for(let i = 0; i < entrada; i++){
        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        


        tr.append(td1, td2, td3, td4, td5)
        tabela.appendChild(tr)

        td1.textContent = listaNumero[i]
        td2.textContent = numerosPares[i]
        td3.textContent = numerosimpares[i]
        td4.textContent = multiplosDe5[i]
        td5.textContent = potencia[i]

    }
}

