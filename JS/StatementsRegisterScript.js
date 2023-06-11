window.onload = function() {
    changerZipcodes();
    showUserType();
}

function showUserType(){
    var userLabel = document.getElementById("user-label");
    userLabel.textContent = "Nombre de usuario - Tipo de usuario";
}

function changerZipcodes(){
    axios.get('https://api.tau.com.mx/dipomex/v1/municipios')
}