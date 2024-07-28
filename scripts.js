function start() {
    window.location.href = 'page2.html';
}

function openMessage() {
    window.location.href = 'page3.html';
}
function revealMessage() {
    document.querySelector('.message').style.transform = "translate(-50%, -50%) scale(1)";
    document.querySelector('.message').style.opacity = "1";
}

