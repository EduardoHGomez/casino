const nameR = document.getElementById('name');
const ageR = document.getElementById('age');
const emailR = document.getElementById('email');
const passwordR = document.getElementById('password');
const passwordRepit = document.getElementById('Repitpassword');
const actionRegister = document.getElementById('regiteering')



actionRegister.addEventListener('click', async () => {
    try {
        // Obtener los valores del formulario
        const userName = nameR.value;
        const userAge = ageR.value;
        const userEmail = emailR.value;
        const userPassword = passwordR.value;
        const userPasswordRepeat = passwordRepit.value;

        if (userPassword !== userPasswordRepeat) {
            console.log('Las contraseñas no coinciden');
            return;
        }

        const userData = {
            name: userName,
            age: userAge,
            email: userEmail,
            password: userPassword,
        };

        const requestBody = JSON.stringify(userData);

        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: requestBody,
        });

        if (response.ok)
        {
            goToInit();
        }
        else
        {
            console.log('Error en el registro');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
