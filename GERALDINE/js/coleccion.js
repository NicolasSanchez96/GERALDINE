// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-container img');
    
    imagenes.forEach(imagen => {
      imagen.addEventListener('click', function() {
        // Crear un modal o usar alguna técnica para mostrar la imagen agrandada
        alert('Implementa aquí la lógica para mostrar la imagen agrandada');
      });
    });
  });