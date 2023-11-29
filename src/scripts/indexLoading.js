
const text = document.getElementById('textProf')
const loader = document.getElementById('preloader')
window.addEventListener('load', () =>{
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1500);
    }, 1000);
})



document.addEventListener('DOMContentLoaded', () => {
    loadName()
});

function loadName()
{
    const token = sessionStorage.getItem('token');

    if (!token)
    {
        return;
    }

    fetch('http://localhost:3000/getUserName', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    }).then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener el nombre desde el servidor');
            }
            return response.json();
        }).then(data => {
            const textProf = document.getElementById('textProf');
            textProf.innerText = data.name;
        }).catch(error => console.error('Error en la solicitud al servidor:', error));
}

let defaultTransform = 0;


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

