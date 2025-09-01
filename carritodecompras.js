const carritoDiv = document.getElementById("carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length === 0) {
    carritoDiv.innerHTML = "<p>Tu carrito está vacío.</p>";
} else {
    let total = 0;
    carritoDiv.innerHTML = "<ul>";
    carrito.forEach(p => {
        carritoDiv.innerHTML += `<li>${p.nombre} - Bs. ${p.precio}</li>`;
        total += p.precio;
    });
    carritoDiv.innerHTML += `</ul><div class="cart">Total: <strong>Bs. ${total}</strong></div>`;
}