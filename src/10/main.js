(function () {
    const keyCodeShift = 16;
    let isShiftPressed = false;
    let lastChecked;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    function handleCheck() {

        let inBetween = false;

        // active click with shift pressed
        if (isShiftPressed && this.checked) {
            checkboxes.forEach(checkbox => {

                if (checkbox === lastChecked || checkbox === this) {
                    inBetween = !inBetween;
                    return;
                }

                if (inBetween)
                    checkbox.checked = true
            });
        }

        lastChecked = this;
    }

    document.addEventListener('keydown', (e) => {
        if (e.keyCode !== keyCodeShift)
            return;
        isShiftPressed = true;
    });

    document.addEventListener('keyup', () => isShiftPressed = false);

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', handleCheck);
    });

}())