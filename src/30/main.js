(function(){

    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const timer = document.querySelector('.timer');

    const buttonGameStart = document.querySelector('.js-start-game');

    const initalTime = 60; // seconds
    let timeLeft = initalTime;
    
    let timerInterval;
    let holeUp;
    let runningGame;
    
    function getRandomTime(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }

    function getRandomHole(){
        const max = holes.length;

        const holeNumber = Math.floor(Math.random() * Math.floor(max));
        const hole = holes[holeNumber];

        if(hole === holeUp)
            return getRandomHole()
        
        holeUp = hole;
        return hole;
    }

    function addScore(){
        scoreBoard.textContent = parseInt(scoreBoard.textContent) + 1;
    }

    function peep(){
        const time = getRandomTime(200,1000);
        const hole = getRandomHole();

        hole.classList.add('up');
        runningGame = setTimeout(() => {
            hole.classList.remove('up');
            peep();
        }, time);
    }

    function startTimer(){
        printTimer();

        timerInterval = setInterval(() => {
            if(timeLeft <= 0){
                stopGame();
                return;
            }

            timeLeft--;
            printTimer();
        }, 1000)
    }

    function printTimer(){
        timer.textContent = `Time left: ${timeLeft < 10 ? '0' : ''}${timeLeft}`;
    }

    function stopTimer(){
        clearInterval(timerInterval);
    }

    function startGame(){
        // reset score board
        scoreBoard.textContent = 0;
        timeLeft = initalTime;
        
        startTimer();
        peep();
        buttonGameStart.textContent = 'Stop!';
    }

    function stopGame(){
        stopTimer();
        clearTimeout(runningGame);
        holeUp.classList.remove('up');
        runningGame = null;
        buttonGameStart.textContent = 'Start!';
    }

    function toggleGame(){
        if(runningGame){
            stopGame();
        } else{
            startGame();
        }
    }

    moles.forEach(mole => mole.addEventListener('click', addScore));
    buttonGameStart.addEventListener('click', toggleGame);

    printTimer();
}())

