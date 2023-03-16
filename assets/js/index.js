function renderPage(){
    renderizarTarjetas(arrDatos, conTarjetas)
    const arrCategorias = obtenerCategorias(arrDatos)
    mostrarCategorias(arrCategorias, check)
}