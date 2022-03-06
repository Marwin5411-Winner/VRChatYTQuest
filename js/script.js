var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
var resolveBtn = document.querySelector('#resolve');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
resolveBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    document.getElementById('link').innerHTML = `${window.location.protocol}://${window.location.hostname}/video?URL=${URLinput.value}`;
});
function sendURL(URL) {
    window.location.href = `http://localhost:3000/video?URL=${URL}`;
}