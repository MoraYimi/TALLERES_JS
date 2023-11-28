`use strict`
function consulDatos() {
    fetch("./informacion-json/informacion-guatavita.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("no response");
            }
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data => {
            const seleccionarEquipment = document.querySelector("#lugares2")
            console.log(data)
            for (let i = 0; i < data.tarjetas.length; i++) {
                const crearDoc = document.createElement("div")
                crearDoc.classList.add("contenedor1")
                const crearImagen = document.createElement("img")
                crearImagen.classList.add("foto")
                crearImagen.src = (data.tarjetas[i].imagen)
                console.log(data.tarjetas[i].imagen)
                console.log(crearImagen)
                crearDoc.innerHTML = `
                
                <span class="texto">${data.tarjetas[i].texto}</span>
               
                `
                             
                crearDoc.appendChild(crearImagen)
                seleccionarEquipment.appendChild(crearDoc)
            }
        })
        .catch(error => {
            console.error(error, "errorrrrr");
        });
 
 
}
 
consulDatos();