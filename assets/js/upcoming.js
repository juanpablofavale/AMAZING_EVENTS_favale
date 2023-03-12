
function aplicarFiltros(){
    filtrarUpcoming()
}

function filtrarUpcoming(){
    const upcomingArr = data.events.filter(evnt => data.currentDate<=evnt.date)
    const upcomingChecked = upcomingArr.filter((evnt, index) => objCat[evnt.category+index].checked)
    renderizarTarjetas(upcomingChecked, conTarjetas)
}

aplicarFiltros()