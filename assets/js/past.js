function renderPage(){
    datos = arrData.filter(obj => currentDate>obj.date)
    renderizarTarjetas(datos, conTarjetas)
    const arrCategorias = obtenerCategorias(arrDatos)
    mostrarCategorias(arrCategorias, check)
}