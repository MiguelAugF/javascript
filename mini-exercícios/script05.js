parImpar(23)
function parImpar(Num){
    for(i=0;i<=Num;i++){
        if (i % 2 === 0){
            console.log(`O número ${i} é par`)
        }else{
            console.log(`O númer ${i} é ímpar`)
        }
    }
}