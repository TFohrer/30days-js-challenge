const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const rgbInputs = document.querySelectorAll('.rgb input');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error("Something went wrong!");
        });
}

function paintToCanvas() {
    const { videoWidth: width, videoHeight: height } = video;

    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        let pixels = ctx.getImageData(0, 0, width, height);

        //pixels = redEffect(pixels);
        pixels = greenScreen(pixels);

        ctx.putImageData(pixels, 0, 0);

    }, 16);
}


function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    var imageBlob = canvas.toDataURL('image/jpeg');

    const link = document.createElement('a');
    link.href = imageBlob;
    link.setAttribute('download', 'webcam-tmp');
    const image = document.createElement('img');
    image.src = imageBlob;

    link.appendChild(image);
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] += 100//r
        pixels.data[i + 1] -= 50//g
        pixels.data[i + 2] *= 0.5//b
    }

    return pixels;
}

function greenScreen(pixels) {

    let levels = {};

    rgbInputs.forEach(input => {
        levels[input.name] = input.value;
    });

    for (let i = 0; i < pixels.data.length; i += 4) {
        red = pixels.data[i];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
          }
    }

    return pixels;
}

getVideo();

video.addEventListener('loadedmetadata', paintToCanvas);