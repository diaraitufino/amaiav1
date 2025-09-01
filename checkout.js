document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();
  localStorage.removeItem('carrito');
  document.getElementById('resumen').innerHTML = "<h3>Gracias por tu compra en Amaïa 💚</h3>";
});