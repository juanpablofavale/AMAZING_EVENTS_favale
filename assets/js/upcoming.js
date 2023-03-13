datos = data.events.filter(evnt => data.currentDate<=evnt.date)
renderizarTarjetas(datos, conTarjetas)
const arrCategorias = obtenerCategorias(data.events)
mostrarCategorias(arrCategorias, check)