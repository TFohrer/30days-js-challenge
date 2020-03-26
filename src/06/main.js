(function () {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const suggestions = document.querySelector('.suggestions');

    let cities = [];

    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities = data)
        .then(addEventListener);

    function findMatches(searchString, cities) {
        const regex = new RegExp(searchString, 'gi');
        console.log(cities);
        return cities
            .filter(place => {
                return place.city.match(regex) || place.state.match(regex)
            })
    }

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    function displayMatches() {
        const matches = findMatches(this.value, cities);
        const regex = new RegExp(this.value, 'gi');

        const html = matches.map(place => {
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            const population = formatNumber(place.population);
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${population}</span>
                </li>
            `;
        }).join('');

        suggestions.innerHTML = html;
    }

    function addEventListener() {
        const searchInput = document.querySelector('.search');

        searchInput.addEventListener('keyup', displayMatches);
    }

}());