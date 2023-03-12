const indexChecked = data.events.filter((evnt, index) => objCat[evnt.category+index].checked)
renderizarTarjetas(indexChecked, conTarjetas)