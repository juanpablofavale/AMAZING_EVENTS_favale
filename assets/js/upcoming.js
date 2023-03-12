
function aplicarFiltros(){
    filtrarUpcoming()
}

function filtrarUpcoming(){
    const upcomingArr = data.events.filter(evnt => data.currentDate<=evnt.date)
    renderizarTarjetas(upcomingArr, conTarjetas)
}

aplicarFiltros()