function count(){
    var txtstart = window.document.getElementById('start')
    var txtend = window.document.getElementById('end')
    var txtstep = window.document.getElementById('step')
    var contage = window.document.getElementById('contage')
    contage.innerHTML = '   '
    if(txtstart.value.length == 0 || txtend.value.length == 0 || txtstep.value.length == 0){
        window.alert('Dados Faltando!')
    }else{
        let start = Number(txtstart.value)
        let end = Number(txtend.value)
        let step = Number(txtstep.value)
        if (start< end){
            for(let c = start; c<= end; c+=step){
                contage.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c = start; c >= end; c-= step){
                contage.innerHTML += `${c} \u{1F449}`
            }
        }
        contage.innerHTML += `\u{1F3C1}`
    }
}