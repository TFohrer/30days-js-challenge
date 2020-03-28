(function () {

    const secret = 'secret';
    const input = [];

    document.addEventListener('keyup', (e) => {
        input.push(e.key);

        input.splice(-secret.length - 1, input.length - secret.length);

        if(input.join('') === secret){
            document.write('AWESOME');
            cornify_add();
        }
    });

}());