function aplicarFiltros(){
    filtrarPast()
}

function filtrarPast(){
    const pastArr = data.events.filter(obj => data.currentDate>obj.date)
    const pastChecked = pastArr.filter((evnt, index) => objCat[evnt.category+index].checked)
    renderizarTarjetas(pastChecked, conTarjetas)
}

aplicarFiltros()