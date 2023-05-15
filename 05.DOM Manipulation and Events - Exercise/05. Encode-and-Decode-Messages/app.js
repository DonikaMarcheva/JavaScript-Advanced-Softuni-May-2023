function encodeAndDecodeMessages() {
    let initialText = document.querySelectorAll('#main textarea')[0];
    let sendButton = document.querySelectorAll('#main button')[0];
    let receivedText = document.querySelectorAll('#main textarea')[1];
    let decodeButton = document.querySelectorAll('#main button')[1];
    sendButton.addEventListener('click', sendEncode);
    decodeButton.addEventListener('click', receiveDecode)
    function sendEncode(e) {
        let encodedText = initialText.value
            .split('')
            .map(x => x.charCodeAt() + 1)
            .map(x => String.fromCharCode(x))
            .join('');
        document.querySelectorAll('#main textarea')[0].value = '';
        receivedText.value = encodedText;
    }
    function receiveDecode() {
        let decodedText = receivedText.value
            .split('')
            .map(x => x.charCodeAt() - 1)
            .map(x => String.fromCharCode(x))
            .join('');
        receivedText.value = decodedText;
    }
}