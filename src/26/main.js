(function () {
    const dropdownBackground = document.querySelector('.dropdownBackground');
    const menuItems = document.querySelectorAll('.cool > li');
    const nav = document.querySelector('.top')

    function updateDropdownBackground(dropdown) {
        const dropdownCoords = dropdown.getBoundingClientRect();
        const navCoords = nav.getBoundingClientRect();

        const coords = {
            width: dropdownCoords.width,
            height: dropdownCoords.height,
            top: dropdownCoords.top - navCoords.top,
            left: dropdownCoords.left - navCoords.left
        }

        dropdownBackground.style.transform = `translateY(${coords.top}px) translateX(${coords.left}px)`;
        dropdownBackground.style.width = `${coords.width}px`;
        dropdownBackground.style.height = `${coords.height}px`;
    }

    function menuItemEnter() {
        const dropdown = this.querySelector('.dropdown');

        showDropdown(this);
        updateDropdownBackground(dropdown);
    }

    function menuItemLeave() {
        hideDropdown(this);
    }

    function showDropdown(listItem) {
        listItem.classList.add('trigger-enter');

        setTimeout(() => {
            if(listItem.classList.contains('trigger-enter')){
                listItem.classList.add('trigger-enter-active');
            }
        }, 150);

        dropdownBackground.classList.add('open');
    }

    function hideDropdown(listItem){
        listItem.classList.remove('trigger-enter', 'trigger-enter-active');
        dropdownBackground.classList.remove('open');
    }

    menuItems.forEach(menuItem => menuItem.addEventListener('mouseenter', menuItemEnter))
    menuItems.forEach(menuItem => menuItem.addEventListener('mouseleave', menuItemLeave))
}())