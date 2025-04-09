const nombreInput = document.getElementById("nombre");
const guardarBtn = document.getElementById("guardarBtn");

if (guardarBtn) {
  guardarBtn.addEventListener("click", () => {
    const nombre = nombreInput.value.trim();

    if (nombre) {
      localStorage.setItem("nombreUsuario", nombre);
      alert("Nombre guardado correctamente.");
      window.location.href = "welcome.html";
    } else {
      alert("Por favor, ingresa un nombre válido.");
    }
  });
}