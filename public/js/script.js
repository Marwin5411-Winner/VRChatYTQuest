var URLinput = document.querySelector('#videoURL');
var resolveBtn = document.querySelector('#submit');
var URLinputx = document.querySelector('#videoURLx');
var resolveBtnx = document.querySelector('#submitx');
resolveBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    document.getElementById('link').innerHTML = `${window.location.protocol}//${window.location.hostname}/yt?url=${URLinput.value}`;
});



resolveBtnx.addEventListener('click', () => {
    console.log(`URL: ${URLinputx.value}`);
    document.getElementById('link-x').innerHTML = `${window.location.protocol}//${window.location.hostname}/xvideo?url=${URLinputx.value}`;
});