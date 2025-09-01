const productos = [
    {
        id: 1,
        nombre: "Bálsamo Labial de Menta",
        precio: 25,
        descripcion: "Hidratación profunda con ingredientes naturales."
    },
    {
        id: 2,
        nombre: "Crema Facial de Aloe Vera",
        precio: 55,
        descripcion: "Calma y suaviza la piel con aloe orgánico."
    },
    {
        id: 3,
        nombre: "Aceite Esencial de Lavanda",
        precio: 70,
        descripcion: "Relajante natural con aroma floral."
    },
    {
        id: 4,
        nombre: "Exfoliante Corporal de Café",
        precio: 40,
        descripcion: "Elimina células muertas y deja la piel suave."
    },
    {
        id: 5,
        nombre: "Shampoo Sólido de Romero",
        precio: 60,
        descripcion: "Fortalece el cabello y estimula el crecimiento."
    }
];

const catalogoDiv = document.getElementById("catalogo");

productos.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <p><strong>Precio:</strong> Bs. ${prod.precio}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    catalogoDiv.appendChild(div);
});

function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}
