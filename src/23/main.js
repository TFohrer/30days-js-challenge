(function(){

    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector('#speak');
    const stopButton = document.querySelector('#stop');

    function populateVoices(){
        voices = this.getVoices();
        console.log('populate');
        voicesDropdown.innerHTML = voices.map((voice) => {
            return `<option value="${voice.name}">${voice.lang} - ${voice.name}</option>`
        }).join('');
    }

    function setVoice(){
        msg.voice = voices.find(voice => voice.name === this.value);
    }


    function toggle(startOver = true){
        speechSynthesis.cancel();
        
        if(startOver)
            speak();
    }

    function speak(){

        options.forEach(option => {
            msg[option.name] = option.value;
        });
        
        speechSynthesis.speak(msg);
    }

    speakButton.addEventListener('click', toggle);
    stopButton.addEventListener('click', () => toggle(false));

    speechSynthesis.addEventListener('voiceschanged',  populateVoices);
    
    voicesDropdown.addEventListener('change', setVoice);
}())

