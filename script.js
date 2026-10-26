// Lista de imágenes de la galería
const galleryImages = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar galería dinámica
    const galleryContainer = document.getElementById('gallery-container');

    if (galleryContainer) {
        galleryContainer.innerHTML = '';

        galleryImages.forEach(imageName => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = `images/gallery/${imageName}`;
            img.alt = 'Entrenamiento HAMPE';
            img.loading = 'lazy';

            item.appendChild(img);
            galleryContainer.appendChild(item);
        });
    }

    // 2. Lógica para el Menú Hamburguesa en celulares
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Cambia el icono entre hamburguesa y 'X'
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Cierra el menú automáticamente cuando el usuario toca una opción
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    }
});