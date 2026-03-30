const gerarListaNumeros = function(num){
    let numeroParcelas = num 
    let lista = []

    for(let i = 1 ; i <= numeroParcelas ; i ++){
        lista.push(i)
    }

    return lista
}

const  gerarParcelasFixas = function(valortotal , numeroParcelas){
    let total = valortotal 
    let parcerlas = numeroParcelas

    let parcerlasFixas = valortotal / numeroParcelas

   return parcerlasFixas
}

const gerarJurosDoMes = function(saldoDevedor, taxasJuros){
    let totalSaldoDevedor = saldoDevedor
    let totalTaxaJuros = taxasJuros

    let jurosMes = totalSaldoDevedor * (totalTaxaJuros / 100)

    return jurosMes
    
}


const gerarTotalDoMes = function(parcelas, jurosMes){
    let totalParcelas = parcelas
    let totalJurosMes = jurosMes

    let totalMes = totalParcelas + totalJurosMes

    return totalMes
}

const gerarSaldoDevedor = function(saldoDevedor, parcelas){
    let totalSaldoDevedor = saldoDevedor
    let totalParcelas = parcelas

    let saldoDevedorFinal = totalSaldoDevedor - totalParcelas

    return saldoDevedorFinal
}


const criarTabela = function (){
    const tabela = document.getElementById("tabela")
    tabela.innerHTML = ""
    const valorTotal = Number(document.getElementById("valorTotal").value)
    const taxaJuros = Number(document.getElementById("taxaJuros").value)
    const numeroParcelas = Number(document.getElementById("numeroParcelas").value)


    let saldoDevedor = valorTotal
    let listaNumero = gerarListaNumeros(numeroParcelas)
    let parcelasFixas = gerarParcelasFixas(valorTotal, numeroParcelas)


        
    
    
    for(let i = 0; i < numeroParcelas ; i++){
        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        let jurosMes = gerarJurosDoMes(saldoDevedor, taxaJuros)
       let totalMes = gerarTotalDoMes(parcelasFixas, jurosMes)
       saldoDevedor = gerarSaldoDevedor(saldoDevedor, parcelasFixas)
       

        


        tr.append(td1, td2, td3, td4, td5)
        tabela.appendChild(tr)

        td1.textContent = listaNumero[i]
        td2.textContent = "R$ " + parcelasFixas.toFixed(2)
        td2.classList.add("col-parcela")

        td3.textContent = "R$ " + jurosMes.toFixed(2)
        td3.classList.add("col-juros")

        td4.textContent = "R$ " + totalMes.toFixed(2)
        td4.classList.add("col-total")

        td5.textContent = "R$ "+ saldoDevedor.toFixed(2)
        td5.classList.add("col-saldo")


    }
}


