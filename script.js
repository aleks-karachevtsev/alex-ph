// Change opacity and scale of background image on scroll
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var backgroundImage = document.querySelector('.hero');
    backgroundImage.style.opacity = 1 - scrollPosition / 1000;
    backgroundImage.style.transform = 'scale(' + (1 - scrollPosition / 2000) + ')';
    if(scrollPosition > 100) {
        backgroundImage.classList.add('animate');
    } else {
        backgroundImage.classList.remove('animate');
    }
});
