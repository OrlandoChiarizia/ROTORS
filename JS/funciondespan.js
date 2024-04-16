document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.getElementById("destacados");
    const masRecientes = document.getElementById("mas-recientes");
    const masAlquilados = document.getElementById("mas-alquilados");

    const productosDestacados = document.querySelectorAll(".card-product[data-destacado='true']");
    const productosRecientes = document.querySelectorAll(".card-product[data-reciente='true']");
    const productosAlquilados = document.querySelectorAll(".card-product[data-alquilado='true']");

    function mostrarProductos(productos) {
        // Ocultar todos los productos primero
        document.querySelectorAll(".card-product").forEach(function(producto) {
            producto.style.display = "none";
        });
        // Mostrar solo los productos especificados
        productos.forEach(function(producto) {
            producto.style.display = "block";
        });
    }

    destacados.addEventListener("click", function() {
        mostrarProductos(productosDestacados);
    });

    masRecientes.addEventListener("click", function() {
        mostrarProductos(productosRecientes);
    });

    masAlquilados.addEventListener("click", function() {
        mostrarProductos(productosAlquilados);
    });
});
