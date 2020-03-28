(function () {

    const images = document.querySelectorAll('img.slide-in');

    /*function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }*/

    var intersectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.intersectionRatio <= 0){
                return;
            }
            else{
                entry.target.classList.add('active');
                intersectionObserver.unobserve(entry.target);
            } 
        });
      });
      
      images.forEach((image) => {
          intersectionObserver.observe(image);
      })
}())