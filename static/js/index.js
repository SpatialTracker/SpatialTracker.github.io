window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Handle video loading and playback
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('loadstart', () => {
            video.classList.add('loading');
        });

        video.addEventListener('canplay', () => {
            video.classList.remove('loading');
            video.play().catch(() => {
                console.log('Autoplay prevented');
            });
        });

        video.addEventListener('error', () => {
            video.classList.remove('loading');
            console.error('Error loading video:', video.src);
        });

        // Ensure videos are muted and looping
        video.muted = true;
        video.loop = true;
    });

    // Initialize other carousels
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    
    bulmaSlider.attach();
});
