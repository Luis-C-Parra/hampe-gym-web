// Arreglo con la lista de fotos en la carpeta images/gallery/
// A medida que agregues fotos a la carpeta, solo debes sumar el nombre del archivo en esta lista:
const galleryImages = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    if (galleryContainer) {
        galleryImages.forEach(imageName => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = `images/gallery/${imageName}`;
            img.alt = 'Entrenamiento HAMPE';
            img.loading = 'lazy'; // Carga diferida para optimizar velocidad

            item.appendChild(img);
            galleryContainer.appendChild(item);
        });
    }
});