(function () {
    const playButton = document.querySelector('.toggle');
    const video = document.querySelector('video');
    const rangeSliders = document.querySelectorAll('.player__slider');
    const progress = document.querySelector('.progress');
    const progressBar = document.querySelector('.progress__filled');
    const skipper = document.querySelectorAll('[data-skip]');

    function togglePlay() {
        if (video.paused)
            video.play();
        else
            video.pause();
    }

    function updatePlayButton() {
        const icon = video.paused ? '►' : '❙ ❙';
        playButton.innerHTML = icon;
    }

    function handleRangeSliderChange() {
        const property = this.name;
        const value = this.value;

        video[property] = value;
    }

    function handleSkip(){
        const skip = this.dataset.skip;
        
        video.currentTime += parseFloat(skip); 
    }

    function updateProgress(){
        const percent = (video.currentTime/video.duration) * 100;

        progressBar.style.width = `${percent}%`;
        progressBar.style.flexBasis = `${percent}%`;
    }

    function handleProgressBarClick(e){
        const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = newTime;
    }

    playButton.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);
    video.addEventListener('timeupdate', updateProgress);

    rangeSliders.forEach(rangeSlider => {
        rangeSlider.addEventListener('input', handleRangeSliderChange);
    });

    skipper.forEach(skip => {
        console.log(skip);
        skip.addEventListener('click', handleSkip);
    })

    let mouseDown = false;
    progress.addEventListener('click', handleProgressBarClick);
    progress.addEventListener('mousemove', (e) => mouseDown && handleProgressBarClick(e));
    progress.addEventListener('mousedown', () => mouseDown = true);
    progress.addEventListener('mouseup', () => mouseDown = false);
}())