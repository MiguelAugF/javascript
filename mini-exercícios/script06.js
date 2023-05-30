const filme = {
    nome: 'pedro',
    idade: 15
}
propriedade(filme)
function propriedade(obj){
    for (prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop])
        }
    }
}