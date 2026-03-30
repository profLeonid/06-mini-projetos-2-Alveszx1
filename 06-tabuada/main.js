const gerarListaNumeros = function (){
    let lista = []
    for(let i = 1 ; i <= 10; i++){
        lista.push(i)
    }

    return lista
}

const realizarAdicao = function(num){
    let lista = []
    let numero = num
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





