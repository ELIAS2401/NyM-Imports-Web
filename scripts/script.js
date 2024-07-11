
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

//mujeres

let mujeres = document.getElementById("mujerEnlace");
let articuloMujeres = document.getElementById("articuloMujer");

//accesorios

let accesorios = document.getElementById("accesoriosEnlace");
let articuloAccesorios = document.getElementById("articuloAccesorios");

//Responsive ipad

function toggleIpad(elemento) {
    elemento.classList.toggle("ocultar");
}

function togglear(e, articuloAMostrar) {
    e.preventDefault();
    toggleIpad(articuloAMostrar);
}
function hombresClick(e) {
    togglear(e, articuloHombres);
}

function mujeresClick(e) {
    togglear(e, articuloMujeres);
}

function accesoriosClick(e) {
    togglear(e, articuloAccesorios);
}
//Responive

function aplicarEventos() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        hombres.addEventListener("mouseover", () => mostrar(articuloHombres))
        hombres.addEventListener("mouseout", () => ocultar(articuloHombres))
        mujeres.addEventListener("mouseover", () => mostrar(articuloMujeres))
        mujeres.addEventListener("mouseout", () => ocultar(articuloMujeres))
        accesorios.addEventListener("mouseover", () => mostrar(articuloAccesorios))
        accesorios.addEventListener("mouseout", () => ocultar(articuloAccesorios))
    }
    else if (window.matchMedia("(min-width: 768px)").matches) {
        hombres.addEventListener("click", hombresClick);
        mujeres.addEventListener("click", mujeresClick);
        accesorios.addEventListener("click", accesoriosClick);
    }
    else {
        hombres.removeEventListener("mouseover", () => mostrar(articuloHombres))
        hombres.removeEventListener("mouseout", () => ocultar(articuloHombres))
        mujeres.removeEventListener("mouseover", () => mostrar(articuloMujeres))
        mujeres.removeEventListener("mouseout", () => ocultar(articuloMujeres))
        accesorios.removeEventListener("mouseover", () => mostrar(articuloAccesorios))
        accesorios.removeEventListener("mouseout", () => ocultar(articuloAccesorios))

        hombres.removeEventListener("click", hombresClick);
        mujeres.removeEventListener("click", mujeresClick);
        accesorios.removeEventListener("click", accesoriosClick)
    }
}

aplicarEventos();

window.addEventListener('resize', applyListeners);

