const width = document.getElementById('width')


window.onresize = reportWindowSize;

function reportWindowSize(){
    width.textContent = window.innerWidth
}
