function aplicarFiltros(){
    filtrarPast()
}

function filtrarPast(){
    const pastArr = data.events.filter(obj => data.currentDate>obj.date)
    renderizarTarjetas(pastArr, conTarjetas)
    obteneryMostrarCategorias(pastArr)
}

aplicarFiltros()