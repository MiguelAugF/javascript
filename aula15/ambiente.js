let num = [5,8,2,9,3]
num.push(1,4,7,6)
console.log(`O vetor têm ${num.length} posições. E em ordem ${num.sort()}`)
// for(let pos=0;pos<num.length;pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let posi = num.indexOf(8)
console.log(`O valor 8 está na posição ${posi}`)