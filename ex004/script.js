function tab(){
    var txtval = document.getElementById('txtval')
    var res = document.getElementById('res')
    var num = Number(txtval.value)
    if (txtval.value.length == 0){
        window.alert('Valores Inválidos!')
    } else{
        res.innerHTML= ''
        for(var i=1; i < 11;i++){
            let item =  document.createElement('option')
            item.text = `${num} * ${i} = ${num*i}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}