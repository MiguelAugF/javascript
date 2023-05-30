const array = [90]
console.log(mediaAluno(array))
function mediaAluno(notas){
    const soma = 0
    let nota = 0
    for(nota in notas){
        soma = soma + nota;
    }
    const media = soma/(notas.length)
    if(media>=0&&media<= 59){
        return 'F'
    }else if(media>=60 && media<=69){
        return 'D'
    }else if(media>=70 && media<=79){
        return 'C'
    }else if(media>=80 && media<=89){
        return 'B'
    }else if(media>=90 && media<=99){
        return 'A'
    }
}