
let hombres = document.getElementById("hombreEnlace");
let articuloHombres = document.getElementById("articuloHombre");


function mostrar(artic) {
    artic.classList.remove("ocultar");
    artic.addEventListener("mouseover", () => {
        artic.classList.remove("ocultar");
    })
}

function ocultar(articulo) {
    articulo.classList.add("ocultar");
    articulo.addEventListener("mouseout", () => {
        articulo.classList.add("ocultar");
    })
}

hombres.addEventListener("mouseover", () => mostrar(articuloHombres))
hombres.addEventListener("mouseout", () => ocultar(articuloHombres))

//mujeres

let mujeres = document.getElementById("mujerEnlace");
let articuloMujeres = document.getElementById("articuloMujer");

mujeres.addEventListener("mouseover", () => mostrar(articuloMujeres))
mujeres.addEventListener("mouseout", () => ocultar(articuloMujeres))
