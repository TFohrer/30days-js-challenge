(function () {

    const root = document.documentElement;
    const controls = document.querySelectorAll('.controls input');

    function updateControlValue() {
        const variableName = this.name;
        const variableSize = this.dataset.sizing || '';
        const value = this.value + variableSize;

        root.style.setProperty(`--${variableName}`, value);
    }

    controls.forEach((control) => control.addEventListener('input', updateControlValue));

}());