
function loginbutton() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    alert("Usuario: " + username + "\nContraseña: " + password);

    window.location.href = 'CLI_MainDashBoard.html';
}
  
  
function registerButton() {
    
    alert("Redirigiendo a la página de registro...");
    window.location.href = 'ClientRegister.html';
}
  
//document.getElementById('login-button').addEventListener('click', loginbutton);
//document.getElementById('register-button').addEventListener('click', registerButton);
  