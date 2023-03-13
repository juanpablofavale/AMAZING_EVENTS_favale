datos = data.events.filter(obj => data.currentDate>obj.date)
renderizarTarjetas(datos, conTarjetas)
const arrCategorias = obtenerCategorias(data.events)
mostrarCategorias(arrCategorias, check)