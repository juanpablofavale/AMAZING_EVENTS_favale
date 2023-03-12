const conTarjetas = document.getElementById("tarjetas")

function renderizarTarjetas(arrTarjetas, contenedor) {
    let tarjetas = ""
    for (tarjeta of arrTarjetas) {
        tarjetas += `
            <div class="card p-0" style="width: 16em;">
            <img src="${tarjeta.image}"
                class="card-img-top" alt="cinema">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">${tarjeta.name}</h5>
                    <p class="card-text">${tarjeta.description}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="precio mb-0">$${tarjeta.price}</p>
                    <a href="./details.html" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            </div>
            `
    }

    contenedor.innerHTML = tarjetas
}

const check = document.getElementById("checkbox")

const arrCategorias = data.events.map(evnt => evnt.category)
const categorias = arrCategorias.filter((cat, indice, arr) => arr.indexOf(cat)==indice)
const filtros = categorias.reduce((ac, item, indice) => ac + `<label><input onclick="aplicarFiltros()" type="checkbox" name="${item}${indice}" id="${item}${indice}"> ${item}</label>`, "")
check.innerHTML = filtros

const objCat = {}
categorias.forEach((cat, index) => {
    objCat[cat+index]=document.getElementById(cat+index)
    objCat[cat+index].checked=true
})