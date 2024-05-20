window.addEventListener('scroll', function() {
    const mainImage = document.querySelector('.main-image');
    const scrollPosition = window.scrollY;

    // Change the scale of the image based on scroll position
    mainImage.style.transform = `scale(${1 + scrollPosition / 1000})`;
});
