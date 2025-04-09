const mensajeDiv = document.getElementById("mensaje");
const eliminarBtn = document.getElementById("eliminarBtn");

if (mensajeDiv) {
  const nombre = localStorage.getItem("nombreUsuario");

  if (nombre) {
    mensajeDiv.innerHTML = `¡Bienvenido de nuevo, ${nombre}!`;
  } else {
    mensajeDiv.innerHTML =
      "No se encontró un nombre, por favor regresa a la página de inicio e ingresa tu nombre.";
  }
}

if (eliminarBtn) {
  eliminarBtn.addEventListener("click", () => {
    localStorage.removeItem("nombreUsuario");
    alert("Nombre eliminado. Serás redirigido al index.");
    window.location.href = "index.html";
  });
}