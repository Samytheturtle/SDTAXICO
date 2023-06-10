window.onload = function() {
    div_resultados = document.getElementById("div_resultados");
    div_resultados.style.display = "none";

}

//document.getElementById("carrito").style.display = "block";

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
    }else if(tabName=="visualizar"){
        changerProductHisroty();
    }
}
function changerProductCar() {
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedorProductosCarrito");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 100; i++) {
        var n = i;
        let tarjeta = generateCardProduct(n);
        tarjetaContenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
}
function changerProduct() {
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedorProductos");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 100; i++) {
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
    return '<div class="tarjetaProduct">' +
        '<h3>' + n + ', ' + "Prueba" + '</h3>' +
        '</div>';
}