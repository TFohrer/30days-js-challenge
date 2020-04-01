(function(){

    const highlight = document.querySelector('.highlight');
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseover', updateHighlight);
    })

    function updateHighlight(event){
        const linkPositions = this.getBoundingClientRect();
        
        const coords = {
            width: linkPositions.width,
            height: linkPositions.height,
            top: linkPositions.top + window.scrollY,
            left: linkPositions.left + window.scrollX
        }

        highlight.style.transform = `translateY(${coords.top}px) translateX(${coords.left}px)`;
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;

    }
}())