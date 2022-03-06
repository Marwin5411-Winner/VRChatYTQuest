var URLinput = document.querySelector('.URL-input');
var resolveBtn = document.querySelector('#resolve');
resolveBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    document.getElementById('link').innerHTML = `${window.location.protocol}//${window.location.hostname}/video?URL=${URLinput.value}`;
});
function sendURL(URL) {
    window.location.href = `${window.location.protocol}//${window.location.hostname}/video?URL=${URL}`;
}