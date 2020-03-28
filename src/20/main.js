(function () {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    const words = document.querySelector('.words');

    recognition.interimResults = true;

    recognition.addEventListener('result', (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        if (event.results[0].isFinal) {
            const p = document.createElement('p');
            p.textContent = transcript;
            words.appendChild(p);
        }

    });

    recognition.addEventListener('end', recognition.start);

    recognition.start();
}())