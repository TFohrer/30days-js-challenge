(function () {
    const videos = document.querySelectorAll('.videos li');
    const totalHTML = document.querySelector('.total');

    const seconds =
        [...videos]
            .map(video => {
                const [minutes, seconds] = video.dataset.time.split(':').map(parseFloat);
                return (minutes * 60) + seconds;
            }).reduce((total, seconds) => total += seconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    totalHTML.innerHTML = `${hours} Hours ${minutes} Minutes ${secondsLeft} Seconds`;
}())