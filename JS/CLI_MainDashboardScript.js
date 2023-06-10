window.onload = function() {
    div_resultados = document.getElementById("div_resultados");
    div_resultados.style.display = "none";
    changerCategory();
    changerProduct();
    showUserType();
    countProductCar();
}

function showUserType(){
    var userLabel = document.getElementById("user-label");
    userLabel.textContent = "Nombre de usuario - Tipo de usuario";
}


function buttonFuncionalityRegisteraddress() {
    alert("Funcionalidad en desarrollo: Registrar dirección de entrega");
    return;
}

function buttonFuncionalityRegisterPaymentMethod() {
    alert("Funcionalidad en desarrollo: Registrar método de pago");
    return;
}


function openTab(event, tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

    if (tabName === "catalogo") {
        changerCategory();
        changerProduct();
        
    }else if(tabName==="carrito"){
        changerProductCar();
        console.log('CACA');
        updateCarrinfo();
    }else if(tabName=="visualizar"){
        changerProductHistory();
    }
}

function changerProductHistory() {
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedorProductosHistorial");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 50; i++) {
        var n = i;
        let tarjeta = generateCardProductHistory(n);
        tarjetaContenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
}
function changerProductCar() {
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedorProductosCarrito");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 50; i++) {
        var n = i;
        let tarjeta = generateCardProductCar(n);
        tarjetaContenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
}

function countProductCar(){
    var cartCountLabel = document.getElementById("cantidad_carrito");
    cartCountLabel.textContent = "100";
}

function changerProduct() {
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedorProductos");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 50; i++) {
        var n = i;
        let tarjeta = generateCardProduct(n);
        tarjetaContenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
}
function changerCategory() {
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedor");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 15; i++) {
        var n = i;
        let tarjeta = generateCardCategory(n);
        tarjetaContenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
}
function generateCardCategory(n) {
    return '<div class="tarjetaCategory">' +
        '<h3>' + n + ', ' + "Prueba" + '</h3>' +
        '</div>';
}
function generateCardProduct(n) {
    var nombreProducto = "Producto " + n; 
    return '<div class="tarjetaProduct">' +
        '<h3>' + nombreProducto + '</h3>' +
        '<button onclick="addToCar(\'' + nombreProducto + '\')">Agregar al carrito</button>' +
        '</div>';
}
function generateCardProductCar(n) {
    var nombreProducto = "Producto " + n; 
    return '<div class="tarjetaProduct">' +
        '<h3>' + nombreProducto + '</h3>' +
        '</div>';
}
function generateCardProductHistory(n) {
    var nombreProducto = "Producto " + n; 
    return '<div class="tarjetaProduct">' +
        '<h3>' + nombreProducto + '</h3>' +
        '</div>';
}
function addToCar(nombreProducto) {
    // Lógica para agregar el producto al carrito
    alert("Agregado al carrito: " + nombreProducto);
}
function updateCarrinfo() {
    var carritoCantidadLabel = document.getElementById("carrito-cantidad-label");
    carritoCantidadLabel.textContent = "Cantidad: " + cantidadCarrito;

    var carritoTotalLabel = document.getElementById("carrito-total-label");
    carritoTotalLabel.textContent = "Total: $" + totalCarrito.toFixed(2);
}
function deleteAllcar() {
    // Lógica para borrar el contenido del carrito
    alert("Carrito borrado correctamente");

    // Reiniciar el carrito
    cantidadCarrito = 0;
    totalCarrito = 0.00;

    updateCarrinfo();
}
function payCar() {
    // Lógica para procesar el pago del carrito
    alert("Carrito pagado correctamente");

    // Reiniciar el carrito
    cantidadCarrito = 0;
    totalCarrito = 0.00;

    updateCarrinfo();
}