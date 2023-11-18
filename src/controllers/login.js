const emailLogin = document.getElementById('email');
const passLogin = document.getElementById('password');
const actionLogin = document.getElementById('profiteering');

actionLogin.addEventListener('click', async () => {
    try {
        // Obtener los valores del correo electrónico y la contraseña
        let email = emailLogin.value;
        let password = passLogin.value;

        // Verificar si los campos están vacíos
        if (email === "" || password === "") {
            console.log('Ingresar algo');
        } else {
            // Crear un objeto con las credenciales
            let credentials = { email, password };

            // Convertir el objeto a una cadena JSON
            let requestBody = JSON.stringify(credentials);

            // Hacer una solicitud al backend para el inicio de sesión
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });

            // Verificar si la solicitud fue exitosa
            if (response.ok)
            {
                // Obtener el token del cuerpo de la respuesta
                const { token } = await response.json();

                // Almacenar el token en sessionStorage (o localStorage si es necesario)
                sessionStorage.setItem('token', token);
                console.log(sessionStorage)

                // Redirigir a la página de inicio o realizar otras acciones necesarias
                goToIndex()
            } else
            {
                // Manejar errores de inicio de sesión (puedes personalizar según tus necesidades)
                console.log('Error de login 101');
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

