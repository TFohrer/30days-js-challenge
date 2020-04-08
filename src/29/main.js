(function(){
    const buttons = document.querySelectorAll('.timer__button');
    const displayTimer = document.querySelector('.display__time-left');
    const displayEndTime = document.querySelector('.display__end-time');
    const customForm = document.getElementById('custom');
    const customFormInput = document.querySelector('input[name=minutes]');
    
    let timerInterval;

    function setTimer(seconds){

        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;

        const displayTime = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
        
        displayTimer.textContent = displayTime;
        document.title = displayTime;
    }

    function setEndTime(seconds){
        const now = Date.now();
        const then = now + seconds * 1000;
        const end = new Date(then);
        
        const nowHours = end.getHours();
        const nowMinutes = end.getMinutes();

        displayEndTime.textContent = `Be back at ${nowHours}:${nowMinutes}`;
    }

    function startTimer(seconds){
        
        clearInterval(timerInterval);
        setTimer(seconds);
        setEndTime(seconds);

        timerInterval = setInterval(() => {
            if(seconds <= 0){
                clearInterval(timerInterval);
                displayTimer.textContent = `🔔`;
                displayEndTime.textContent = 'Bing Bing!';
                return;
            }

            seconds--;
            setTimer(seconds);
        }, 1000);
    }

    function handleTimerButtonClicked(){
        const time = this.dataset.time;

        startTimer(time);
    }

    function handleCustomFormSubmit(e){
        e.preventDefault();

        const minutes = parseInt(customFormInput.value) || 0;
        startTimer(minutes * 60);
        this.reset();
    }

    buttons.forEach(button => button.addEventListener('click', handleTimerButtonClicked));

    customForm.addEventListener('submit', handleCustomFormSubmit);
}())