// Change opacity and scale of background image on scroll
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var backgroundImage = document.querySelector('.hero');
    backgroundImage.style.opacity = 1 - scrollPosition / 1000; // Adjust as needed
    backgroundImage.style.transform = 'scale(' + (1 - scrollPosition / 2000) + ')'; // Adjust as needed
});

