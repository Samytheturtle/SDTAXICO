window.onload = function() {
    changerCategory();
}

function changerCategory() {
    var categorias = ["Categoria 1", "Categoria 2", "Categoria 3"];
    var categoriaSelect = document.getElementById("categoria");
    categoriaSelect.innerHTML = "";
  
    categorias.forEach(function (categoria) {
      var option = document.createElement("option");
      option.value = categoria;
      option.text = categoria;
      categoriaSelect.appendChild(option);
    });
}
  
function exportData() {
    var codigoBarras = document.getElementById("codigo_barras").value;
    var nombreProducto = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var categoria = document.getElementById("categoria").value;
    var precioVenta = document.getElementById("precio_venta").value;
    var fechaCaducidad = document.getElementById("fecha_caducidad").value;
    var sucursal1 = document.getElementById("sucursal1").value;
    var sucursal2 = document.getElementById("sucursal2").value;
    var sucursal3 = document.getElementById("sucursal3").value;
  
    // Aquí puedes hacer lo que necesites con los datos obtenidos
    console.log("Código de Barras:", codigoBarras);
    console.log("Nombre del Producto:", nombreProducto);
    console.log("Descripción:", descripcion);
    console.log("Categoría de Producto:", categoria);
    console.log("Precio de Venta:", precioVenta);
    console.log("Fecha de Caducidad:", fechaCaducidad);
    console.log("Inventario por Sucursal:");
    console.log("Sucursal 1:", sucursal1);
    console.log("Sucursal 2:", sucursal2);
    console.log("Sucursal 3:", sucursal3);
}
  
function registerProduct() {
    exportData();
    alert("Funcionalidad en desarrollo: Registrar producto");
    // Agrega aquí la lógica para registrar el producto
}
  
function cancelRegister() {
    // Agrega aquí la lógica para cancelar el registro
    alert("Funcionalidad en desarrollo: cancelar registro");
    console.log("Registro cancelado");
}
function changerLabelbranchoffices(){
    div_resultados.style.display = "flex";
    var tarjetaContenedor = document.querySelector(".tarjeta-contenedor");
    tarjetaContenedor.innerHTML = "";

    for (var i = 0; i < 15; i++) {
        var n = i;
        let tarjeta = generatelabelSucursar(n);
        tarjetaContenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
}
function generatelabelSucursar(n) {
    return '<div class="tarjetaCategory">' +
        '<label for="sucursal1">Sucursal 1:</label>' + '<input type="number" id="sucursal1" name="sucursal1" min="0" required><br>' +
        '</div>';

}