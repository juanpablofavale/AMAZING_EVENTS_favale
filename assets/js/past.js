function procesarDataPast(object){
    let arr = []
    let array = object.events

    for (obj of array){
        if (object.currentDate>obj.date){
            arr.push(obj)
        }
    }

    return arr
}

renderizarTarjetas(procesarDataPast(data), conTarjetas)