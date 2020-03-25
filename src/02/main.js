(function(){
    let timer = null;

    function updateTime(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hourHand = document.querySelector('.hour-hand');
        const hourDeg = (360 /  12) * hours + 90;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

        const minutesHand = document.querySelector('.min-hand');
        const minutesDeg = (360 /  60) * minutes + 90;
        minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

        const secondsHand = document.querySelector('.second-hand');
        const secondsDeg = (360 /  60) * seconds + 90;
        secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
        
        cancelAnimationFrame(timer);
        timer = window.requestAnimationFrame(updateTime);
    };

    timer = window.requestAnimationFrame(updateTime);
}());