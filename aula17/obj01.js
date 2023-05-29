let amigo = {
    nome :'Felipe',
    idade :'15',
    peso : 30,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
}}
amigo.engordar(23.2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)