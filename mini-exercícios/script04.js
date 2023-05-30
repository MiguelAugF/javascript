let resultado = vVelocidade(130)
console.log(resultado)

function vVelocidade(velocidade){
    if(velocidade <= 70){
        return 'Continue assim!'
    }else if(velocidade > 70){
        let points = Math.floor((velocidade - 70)/5)
        if (points >= 12){
            return 'Carteira suspensa'
        }else if(points == 0){
            return 'Você recebeu 0 pontos, porém tome cuidado. Você excedeu o limite'
        }else{
            return `Você recebeu ${points} pontos`
        }
    }
}