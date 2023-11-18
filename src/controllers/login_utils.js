

const emailLogin = document.getElementById('email');
const passLogin = document.getElementById('password');
const actionLogin = document.getElementById('profiteering');

actionLogin.addEventListener('click', () =>
{
    console.log(emailLogin.value);
    console.log(passLogin.value)
})