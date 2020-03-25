(function(){
    const classPlaying = 'playing';

    function playMusic(event){
        const keyCode = event.keyCode;

        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        if(!audio) return;

        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        audio.currentTime = 0;
        audio.play();
        
        key.classList.add(classPlaying);
    }

    function removeTransition(event){
        if(event.propertyName !== 'transform') return;
        this.classList.remove(classPlaying);
    }

    document.addEventListener('keydown', playMusic);

    const keys = document.querySelectorAll('.key');

    // remove playing class after transition end
    keys.forEach((key) => {
        key.addEventListener('transitionend', removeTransition);
    });
}())