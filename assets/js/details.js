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
        <p>Name: ${evento.name}</p>
        <p>Date: ${evento.date}</p>
        <p>Description: ${evento.description}</p>
        <p>Category: ${evento.category}</p>
        <p>Place: ${evento.place}</p>
        <p>Capacity: ${evento.capacity}</p>
        <p>Assistance or estimate: ${evento.assistance}</p>
        <p>Price: ${evento.price}</p>
    </div>
</div>
`
details.innerHTML = tarjeta