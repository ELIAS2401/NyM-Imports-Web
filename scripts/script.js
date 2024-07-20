
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




/// haciendo el js de las tarjetas -----

let elementoImagenZapatilla = document.getElementById('imagen-tarjeta-zapatilla');
let elemento= document.querySelector('.imagen-tarjeta-zapatilla')
let imagenOriginalZapatilla = '/assets/ropa/1.jpeg';
let nuevaImagenZapatilla = '/assets/ropa/2.jpeg'; // Cambia esta URL a la nueva imagen


elementoImagenZapatilla.addEventListener('mouseover', function() {
    elementoImagenZapatilla.style.opacity = '0';
    setTimeout(() => {
        elemento.style.opacity = '1';
        elemento.style.backgroundImage = `url(${nuevaImagenZapatilla})`;
       
    }, 300); // Ajusta este valor al mismo que el de la transición
});

elementoImagenZapatilla.addEventListener('mouseout', function() {
    elementoImagenZapatilla.style.opacity = '0';
    setTimeout(() => {
        elemento.style.backgroundImage = `url(${imagenOriginalZapatilla})`;
        elemento.style.opacity = '1';
    }, 300); // Ajusta este valor al mismo que el de la transición
});


/////

let elementoImagenAccesorio = document.getElementById('imagen-tarjeta-accesorio');
let elementoAccesorio = document.querySelector('.imagen-tarjeta-accesorio');
let imagenOriginalAccesorio = '/assets/ropa/3.jpeg';
let nuevaImagenAccesorio = '/assets/ropa/4.jpeg';

elementoImagenAccesorio.addEventListener('mouseover', function() {
    elementoAccesorio.style.opacity = '0';
    setTimeout(() => {
        elementoAccesorio.style.opacity = '1';
        elementoAccesorio.style.backgroundImage = `url(${nuevaImagenAccesorio})`;
       
    }, 300); // Ajusta este valor al mismo que el de la transición
});

elementoImagenAccesorio.addEventListener('mouseout', function() {
    elementoAccesorio.style.opacity = '0';
    setTimeout(() => {
        elementoAccesorio.style.backgroundImage = `url(${imagenOriginalAccesorio})`;
        elementoAccesorio.style.opacity = '1';
    }, 300); // Ajusta este valor al mismo que el de la transición
});