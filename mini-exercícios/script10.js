numerosPrimos(123)
function numerosPrimos(max){
    for(let numero = 2;numero<=max;numero++){
        if (NumeroPrimo(numero)) console.log(numero)
    }
}
function NumeroPrimo(numero){
    for(let divisor = 2; divisor<numero; divisor++){
        if(numero%divisor===0){
            return false
        }
    }
    return true
}