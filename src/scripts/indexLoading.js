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
next.addEventListener("click", goNext);
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
    window.location.href = "index_logIn.html";
}
function goToIndexPending()
{
    window.location.href = "index_logInPending.html";
}

function goToInfo()
{
    window.location.href = "info.html";
}

function goToRules()
{
    window.location.href = "rules.html";
}

function goToProfile()
{
    window.location.href = "profile.html";
}

function goToExit()
{
    alert('Salido, aun no implementado')
}

function goToBalance()
{
    window.location.href = "balance.html";
}

function goToActivity()
{
    window.location.href = "activity.html";
}