// Para agregar interacción
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.float');
    images.forEach((img, index) => {
        img.style.left = `${Math.random() * 100}vw`;
        img.style.top = `${Math.random() * 80}vh`;
    });
});
