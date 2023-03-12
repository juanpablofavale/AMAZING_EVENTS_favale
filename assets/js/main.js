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