document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.querySelector('.galeria');
    const imagenes = galeria.querySelectorAll('img');
    let indiceActual = 0;

    mostrarImagen(indiceActual); // Mostrar la primera imagen al cargar la página

    document.querySelector('.prev').addEventListener('click', () => {
        cambiarImagen(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        cambiarImagen(1);
    });

    function cambiarImagen(direccion) {
        indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
        mostrarImagen(indiceActual);
    }

    function mostrarImagen(indice) {
        imagenes.forEach(img => img.classList.remove('active'));
        imagenes[indice].classList.add('active');
    }
});