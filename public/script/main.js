function init(){
    console.log('hi')
    const gradHeight = document.querySelector('.gradient-background');
    const frameHeight = document.getElementById('sunglass-frame');
    gradHeight.style.height = `${frameHeight.clientHeight}px`;
}

document.readyState == 'interactive' ? init() : document.addEventListener('DOMContentLoaded', () => init());