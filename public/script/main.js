function init(){
    console.log('hi')
    const [winWid, winHei] = [window.innerWidth, window.innerHeight];
    const gradHeight = document.querySelector('.gradient-background');
    const frameHeight = document.getElementById('sunglass-frame');
    const offerPage = document.getElementById('offer');
    const mouseScroll = document.getElementById('mouseScrollAnime');
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
        frame.style.transform = `rotate(-30deg) translateX(${zoomOut}px) translateY(-1px)`;

        // animation on scroll in web logo and name
        webLogo.classList.remove('cometoleft');
        webLogoName.classList.remove('cometoright');
        leftAndRight = window.scrollY / 10;
        webLogo.style.transform = `translateX(${leftAndRight * 1.35}px)`;
        webLogoName.style.transform = `translateX(-${leftAndRight * 2.5}px)`;
        mouseScroll.classList.add('hidden');
        mouseScroll.classList.remove('flex');
    }
    window.onresize = () => {
        console.log('hey');

        frameContainer.style.width = `${window.innerWidth - 40}px`;
    }

    const closePopUpFormBtn = document.getElementById('closePopUp');
    const formContainer = document.getElementById('form-container');
    const registrationForm = document.getElementById('RegistrationForm');
    closePopUpFormBtn.addEventListener("click", (e) => {
        e.target.remove();  
        formContainer.classList.remove("fixedContent");
        document.getElementById('registrationformcontainer').insertAdjacentHTML('beforeend', registrationForm.outerHTML);
        registrationForm.remove();
        document.body.style.overflowY = "auto";
        mouseScroll.classList.add('flex');
        mouseScroll.classList.remove('hidden');
    })

    setTimeout(() => {
        formContainer.classList.add('popup-anime');
    }, 3000);
}

document.readyState == 'interactive' ? init() : document.addEventListener('DOMContentLoaded', () => init());