function init(){
    console.log('hi')
    const [winWid, winHei] = [window.innerWidth, window.innerHeight];
    const gradHeight = document.querySelector('.gradient-background');
    const frameHeight = document.getElementById('sunglass-frame');
    gradHeight.style.height = `${frameHeight.clientHeight}px`;
    
    const navLogoContainer = document.getElementById('nalc');
    const frameContainer = document.getElementById('frameContainer');
    frameContainer.style.height = `${winHei - navLogoContainer.clientHeight}px`;

    const frame = document.getElementById('frame');
    const webLogo = document.getElementById("webLogo");
    const webLogoName = document.getElementById("webLogoName");
    let zoomOut, leftAndRight;
    window.onscroll = (e) => {
        frame.classList.remove('frame-animation');
        zoomOut = window.scrollY < 1 ? 1 : (Math.round(window.scrollY));
        console.log(zoomOut);
        frame.style.transform = `rotate(-45deg) translateX(${zoomOut}px) translateY(-1px)`;

        // animation on scroll in web logo and name
        webLogo.classList.remove('cometoleft');
        webLogoName.classList.remove('cometoright');
        leftAndRight = window.scrollY / 10;
        webLogo.style.transform = `translateX(${leftAndRight * 1.35}px)`;
        webLogoName.style.transform = `translateX(-${leftAndRight * 2.5}px)`;
        
    }

    const closePopUpFormBtn = document.getElementById('closePopUp');
    const formContainer = document.getElementById('form-container');
    closePopUpFormBtn.addEventListener("click", () => {
        formContainer.classList.remove("fixedContent");
    })
}

document.readyState == 'interactive' ? init() : document.addEventListener('DOMContentLoaded', () => init());