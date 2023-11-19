const next = document.getElementById('next');
const prev = document.getElementById('prev')

let defaultTransform = 0;
function goNext()
{
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

next.addEventListener('click', goNext);

function goPrev()
{
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);




function goToIndex()
{
    window.location.href = "http://localhost:3000/index";
}

function goToIndexPending()
{
    window.location.href = "http://localhost:3000/";
}

function goToInfo()
{
    window.location.href = "http://localhost:3000/information";
}

function goToRules()
{
    window.location.href = "http://localhost:3000/rules";
}

function goToProfile()
{
    window.location.href = "http://localhost:3000/profile";

}

/*
function imprimirTodasLasCookies() {
    const cookies = document.cookie.split(';');

    console.log("Todas las cookies:");

    for (let i = 0; i < cookies.length; i++) {
        console.log(cookies[i].trim());
    }
}
 */

function goToExit()
{
    sessionStorage.removeItem('token')
    document.cookie = 'token=; Expires=0;';
    window.location.href = "http://localhost:3000/";
}

function goToBalance()
{
    window.location.href = "http://localhost:3000/profile/balance";
}

function goToActivity()
{
    window.location.href = "http://localhost:3000/profile/activity";
}

function goToInit()
{
    window.location.href = "http://localhost:3000/login";
}

function goToReg()
{
    window.location.href = "http://localhost:3000/register";
}


