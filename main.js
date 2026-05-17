const video = document.querySelector('video');
const btn = document.getElementById('video-btn');

const leftBar = document.querySelector('.left-bar');
const rightBar = document.querySelector('.right-bar');

btn.addEventListener('click', () => {
    btn.classList.toggle('play');

    if (video.paused) {
        video.play();

        leftBar.setAttribute(
            'points',
            '2,0 7,0 7,20 2,20'
        );

        rightBar.setAttribute(
            'points',
            '13,0 18,0 18,20 13,20'
        );

    } else {
        video.pause();

        leftBar.setAttribute(
            'points',
            '2,0 20,10 20,10 2,10'
        );

        rightBar.setAttribute(
            'points',
            '2,10 20,10 20,10 2,20'
        );
    }
}); 

