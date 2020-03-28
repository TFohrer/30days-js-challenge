(function () {
    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const clearAllButton = document.querySelector('.js-clear-all');
    const checkAllButton = document.querySelector('.js-check-all');
    const uncheckAllButton = document.querySelector('.js-uncheck-all');
    const localStorageKey = 'localTapas';
    const items = getStorageItems();

    function addNewItem(e) {
        e.preventDefault();

        const text = this.querySelector('[name="item"]').value;

        const item = {
            text: text,
            done: false
        };

        items.push(item);

        populateList(items, itemsList);
        updateStorage();
        this.reset();
    }

    function populateList(plates = [], platesList) {

        platesList.innerHTML = plates.map((plate, i) => {
            const checked = plate.done ? 'checked' : '';
            return `
                <li>
                    <input type="checkbox" data-index="${i}" id="plate${i}" name="plate${i}" ${checked}>
                    <label for="plate${i}">${plate.text}</label>
                </li>`;
        }).join('');
    }

    function updateStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(items));
    }

    function getStorageItems() {
        return localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : [];
    }

    function clearStorage(){
        localStorage.clear();
    }

    function toggleDone(e) {
        if(!e.target.matches('input[type=checkbox]'))return;

        const itemIndex = e.target.dataset.index;
        const value = e.target.checked;

        items[itemIndex].done = value;
        updateStorage();
    }

    function clearAll(){
        items.splice(0, items.length);

        clearStorage();
        populateList(items, itemsList);
    }

    function toggleCheck(done){
        items.forEach(item => {
            item.done = done;
        });

        updateStorage();
        populateList(items, itemsList);
    }

    function checkAll(){
        toggleCheck(true);
    }

    function uncheckAll(){
        toggleCheck(false);
    }

    
    // event listeners
    addItems.addEventListener('submit', addNewItem);
    itemsList.addEventListener('click', toggleDone)
    clearAllButton.addEventListener('click', clearAll);
    checkAllButton.addEventListener('click', checkAll);
    uncheckAllButton.addEventListener('click', uncheckAll);

    populateList(items, itemsList);
}())
