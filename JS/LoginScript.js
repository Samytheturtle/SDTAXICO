// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón de iniciar sesión
    var loginButton = document.getElementById('login-button');

    // Agregar evento de clic al botón
    loginButton.addEventListener('click', function() {
        // Abrir una nueva ventana o pestaña
        window.open('Ventanas/MainDashboard.html', '_blank');
    });
});
