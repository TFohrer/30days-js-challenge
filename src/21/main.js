(function () {

    const speedValue = document.querySelector('.speed-value');
    const arrow = document.querySelector('.arrow');


    function getLocation() {
        navigator.geolocation.watchPosition(location => {
            const heading = location.coords.heading;
            arrow.style.transform = `rotate(${heading}deg)`;
            speedValue.innerHTML = Math.round(location.coords.speed);
        }, err => {
            console.error(err);
            alert('Please allow location access');
        });
    }

    getLocation();


}())