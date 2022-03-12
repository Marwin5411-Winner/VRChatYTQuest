var URLinput = document.querySelector('#videoURL');
var resolveBtn = document.querySelector('#submit');
resolveBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    document.getElementById('link').innerHTML = `${window.location.protocol}//${window.location.hostname}/download?url=${URLinput.value}`;
});