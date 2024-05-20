// Change opacity and scale of background image on scroll
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var backgroundImage = document.querySelector('.hero');
    var windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight) {
        backgroundImage.style.opacity = 1 - scrollPosition / windowHeight;
        if (window.innerWidth >= 769) {
            backgroundImage.style.backgroundSize = (100 + scrollPosition / 10) + '%';
        } else {
            backgroundImage.style.backgroundSize = (150 + scrollPosition / 5) + '%';
        }
    }
    
    if (scrollPosition > 50) {
        backgroundImage.classList.add('animate');
    } else {
        backgroundImage.classList.remove('animate');
    }
});
