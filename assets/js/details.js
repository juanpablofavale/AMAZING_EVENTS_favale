const details = document.getElementById("details")
const search = location.search
const id = new URLSearchParams(search).get("id")
const evento = data.events.find(evnt => evnt._id == id)
const tarjeta = `
<h1 class="mt-3">Details - ${evento.name}</h1>
<div id="contenedorDetails" class="container d-flex flex-column align-items-center pt-2 mb-4">
    <div>
        <figure>
            <img class="img-details" src="${evento.image}" alt="Image of ${evento.name}">
        </figure>
    </div>
    <div class="descripcion">
        <h4>${evento.name}</h4><br>
        <p>Date: ${evento.date}</p>
        <p>${evento.description}</p>
        <p>Place: ${evento.place}</p>
        <p>Price: $${evento.price}</p>
        </div>
        </div>
        `

//        <p>Category: ${evento.category}</p>
//        <p>Capacity: ${evento.capacity}</p>
//        <p>Assistance or estimate: ${evento.assistance}</p>

        details.innerHTML = tarjeta