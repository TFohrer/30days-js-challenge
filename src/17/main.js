(function(){
    // sort array but without articles (the, a)
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
    const bandsList = document.querySelector('#bands');

    const regexp = new RegExp('the |a |an ','gi');

    bands.sort((bandA, bandB) => {
        const cleanedNameA = bandA.replace(regexp, '').trim();
        const cleanedNameB = bandB.replace(regexp, '').trim();

        return cleanedNameA > cleanedNameB ? 1 : -1;
    });

    bandsList.innerHTML = bands.map(band => {
        return `
            <li>${band}</li>
        `;
    }).join('');
    
}())

