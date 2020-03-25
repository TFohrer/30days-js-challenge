(function(){

    const root = document.documentElement;
    const spacingRange = document.getElementById('spacing');
    const baseRange = document.getElementById('base');
    const blurRange = document.getElementById('blur');
    
    spacingRange.addEventListener('input', () => {
        root.style.setProperty('--spacing', spacingRange.value + 'px');
    });

    blurRange.addEventListener('input', () => {
        root.style.setProperty('--blur', blurRange.value + 'px');
    });

    baseRange.addEventListener('input', () => {
        root.style.setProperty('--base', baseRange.value);
    });

}());