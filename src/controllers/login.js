const emailLogin = document.getElementById('email');
const passLogin = document.getElementById('password');
const actionLogin = document.getElementById('profiteering');

actionLogin.addEventListener('click', async () =>
{
    try
    {
        let email = emailLogin.value;
        let password = passLogin.value;

        if (email === "" || password === "") {
            console.log('Ingresar algo');
        } else {
            let credentials = { email, password };


            let requestBody = JSON.stringify(credentials);


            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });


            if (response.ok)
            {
                const  token  = await response.json();
                document.cookie = `token=${token};`;
                sessionStorage.setItem('token',token)
                goToIndex()
            }
            else
            {
                console.log('Error de login 101');
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

