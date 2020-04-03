(function () {

    const nav = document.getElementById('main');
    const navTop = nav.offsetTop;
    let isNavStuck = false;

    function throttle(fn, wait) {
        var time = Date.now();
        return function() {
          if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
          }
        }
      }

    function handleScroll() {
        const scrollTop = window.scrollY;

        if (!isNavStuck && scrollTop >= navTop) {
            document.body.style.paddingTop = `${nav.offsetHeight}px`;
            document.body.classList.add('fixed-nav');
            isNavStuck = true;
        } else if (isNavStuck && scrollTop < navTop) {
            document.body.classList.remove('fixed-nav');
            document.body.style.paddingTop = 0;
            isNavStuck = false;
        }
    }

    const throttledScrollHandler = throttle(handleScroll, 50);
    window.addEventListener('scroll', throttledScrollHandler);
}())