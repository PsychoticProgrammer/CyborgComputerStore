document.addEventListener('DOMContentLoaded', function () {

    const inputUserRegister = document.querySelector('#usernameRegister');
    const inputPasswordRegister = document.querySelector('#passwordRegister');
    const formRegister = document.querySelector('#register');
    const inputUser = document.querySelector('#username');
    const inputPassword = document.querySelector('#password');
    const formLogin = document.querySelector('#login');
    const invalidUser = document.querySelector('#msgUserInvalid');
    const userExist = document.querySelector('#msgUserExist');

    formRegister.addEventListener('submit', inputForm)
    formLogin.addEventListener('submit', inputForm);



    //---------------------Funciones-------------------------
    function inputForm(event) {

        event.preventDefault();
        console.log({ event });

        var form = event.target;
        var formId = form.getAttribute('id');

        if (formId === 'register') {
            console.log("formulario de registro");
            sendDataRegister(inputUserRegister.value, inputPasswordRegister.value)
        } else if (formId === 'login') {
            console.log("formulario de logeo");
            sendDataLogin(inputUser.value, inputPassword.value)
        }

    }
    

    function sendDataRegister(username, password) {

        // Crear una instancia del objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // URL del endpoint o servicio
        var url = 'http://localhost/PatternsProject/Controller/LoginRest/RestPerson.php';

        var formData = new FormData();
        formData.append('username', username)
        formData.append('pwd', password)

        // Configurar la solicitud
        xhr.open('POST', url, true);

        // Definir el callback para el evento 'load'
        xhr.onload = function () {
            if (xhr.status === 200) {
                // La solicitud se completó con éxito
                var response = xhr.responseText.includes('SQLSTATE[23000]');
                if(!response){
                    userExist.innerText+="Usuario agregado exitosamente";
                    setTimeout(function(){
                        userExist.innerText="";
                    }, 2000);
                    
                }else{

                    userExist.innerText+="El usuario ya existe";
                    setTimeout(function(){
                        userExist.innerText="";
                    }, 2000);
                }

            } else {
                // Hubo un error en la solicitud
                console.error('Error en la solicitud. Código de estado: ' + xhr.status);
            }
        };

        // Enviar la solicitud con los datos en el cuerpo
        xhr.send(formData);

    }



    function sendDataLogin(username, password) {

        // Crear una instancia del objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // URL del endpoint o servicio
        var url = 'http://localhost/PatternsProject/Controller/LoginRest/RestPerson.php?username='+username+"&pwd="+password;

        // Configurar la solicitud
        xhr.open('GET', url, true);

        // Definir el callback para el evento 'load'
        xhr.onload = function () {
            if (xhr.status === 200) {
                // La solicitud se completó con éxito
                var response = JSON.parse(xhr.responseText);
                console.log(response);
                if(response >= 1){
                    createSession();
                    window.location.href = "index.html";
                    window.close();
                }else{
                    invalidUser.innerText+="Usuario invalido xd";
                    setTimeout(function(){
                        invalidUser.innerText="";
                    }, 2000);

                }
            } else {
                // Hubo un error en la solicitud
                console.error('Error en la solicitud. Código de estado: ' + xhr.status);
            }
        };
        // Enviar la solicitud con los datos en el cuerpo
        xhr.send();
    }

    function createSession(){
        sessionStorage.setItem('variableDeSession', 'administrador');
    }


});




