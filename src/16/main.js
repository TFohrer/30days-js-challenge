(function(){
    const hero = document.querySelector('.hero');
    const headline = hero.querySelector('h1');

    function handleMouseMove(){
        const { offsetWidth: width, offsetHeight: height} = hero;
        let {offsetX: x , offsetY: y} = event;
        
        if(this !== event.target){
            x += event.target.offsetLeft;
            y += event.target.offsetTop;
        }

        const shadowX = Math.round((width/2 - x)/5);
        const shadowY = Math.round((height/2 - y)/5);
        headline.style.textShadow = `${shadowX}px ${shadowY}px 10px rgba(0,255,0,1)`
    }

    hero.addEventListener('mousemove', handleMouseMove);
}());