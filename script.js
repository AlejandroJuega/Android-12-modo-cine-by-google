// Transición de entrada entre secciones
function activarSlide() {
  const secs = document.querySelectorAll(".slide-section");
  secs.forEach(s => {
    if (s.classList.contains("active")) {
      s.classList.add("slide-section");
    }
  });
}
