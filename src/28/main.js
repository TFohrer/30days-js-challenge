(function(){

    const speed = document.querySelector('.speed');
    const speedBar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    let speedDragActive = false;

    const speedHeight = speed.offsetHeight;

    const minSpeed = 0.5;
    const maxSpeed = 4;

    function updateVideoSpeed(speed){
        video.playbackRate = speed;
    }

    function handleSpeedBarMove(e){
        if(!speedDragActive) return;

        const mouseOffsetY = e.offsetY;
        const percentage = Math.min(1,(mouseOffsetY / speedHeight));

        const videoSpeed = percentage * (maxSpeed - minSpeed) + minSpeed;

        const videoSpeedText = videoSpeed.toFixed(1);
        const height = Math.round(percentage * 100);

        speedBar.style.height = `${height}%`;

        speedBar.textContent = `${videoSpeedText}x`;
        
        updateVideoSpeed(videoSpeed);
    }

    speed.addEventListener('mousedown', (e) => {
        speedDragActive = true;
        handleSpeedBarMove(e);
    });

    document.addEventListener('mouseup', () => {
        speedDragActive = false;
    });

    document.addEventListener('mousemove', handleSpeedBarMove);

}())