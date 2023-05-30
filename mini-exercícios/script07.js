somar(15)
function somar(max){
    let multiplos3 = 0
    let multiplos5 = 0
    for(i = 0;i<=max;i++){
        if(i%3===0){
            multiplos3 += i
        }
        if(i%5===0){
            multiplos5 += i
        }
    }
    console.log(multiplos3+multiplos5)
}