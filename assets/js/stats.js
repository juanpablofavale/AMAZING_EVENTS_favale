const URLAPI = "https://mindhub-xj03.onrender.com/api/amazing"
let arrDatos
let currentDate

fetch(URLAPI)
    .then(res => res.json())
    .then(data => {
        arrDatos = data.events
        currentDate = data.currentDate
        console.log(arrDatos)
    })
    .catch(err => {
        console.log(err)
        fetch("./assets/data/amazing.json")
            .then(res => res.json())
            .then(data => {
                arrDatos = data.events
                currentDate = data.currentDate
                console.log(arrDatos)
            })
            .catch(err => console.log(err))
    })
