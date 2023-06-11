window.onload = function() {
    div_resultados = document.getElementById("div_resultados");
    div_resultados.style.display = "none";
    changerPedidos();
    showUserType();
}

function showUserType(){
    var userLabel = document.getElementById("user-label");
    userLabel.textContent = "Nombre de usuario - Tipo de usuario";
}

function changerPedidos() {
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedor");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 50; i++) {
        var n = i;
        let tarjeta = generateCardPedido(n);
        tarjetaContenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
}

function generateCardPedido(n) {
    var direccion = '3 de mayo, xalapa';
    return '<div class="tarjetaPedido">' +
        '<h3>' + n + ', ' + "Prueba" + '</h3>' +
        '<button onclick="showAddressInMap(\'' + direccion + '\')">Mostrar mapa</button>' + 
        '<button onclick="completeOrder(\'ENTREGADO\')">Confirmar entrega</button>' + 
        '<button onclick="cancelOrder(\'NO ENTREGADO\')">Cancelar entrega</button>' + 
        '</div>';
}

function showAddressInMap(direccion){

}

function completeOrder(estado){
    console.log('el estado es: ' + estado);
}

function cancelOrder(estado){
    console.log('el estado es: ' + estado);
}