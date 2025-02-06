const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

headerAnim();
bttAnim();

const header = document.querySelector("header");

// Aplicar transparencia al inicio
header.classList.add("header-transparent");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.remove("header-transparent"); 
    header.classList.add("bg-dark");
    header.classList.add("header-solid");
  } else {
    header.classList.remove("header-solid");
    header.classList.remove("bg-dark");
    header.classList.add("header-transparent");
  }
});

function bttAnim() {
  // Referencia al botón
  const backToTopButton = document.getElementById("backToTop");

  // Inicialmente, el botón está oculto con fade out
  backToTopButton.classList.add("fadeBTT");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block"; // Mostrar antes de animar
      setTimeout(() => {
        backToTopButton.classList.add("visibleBTT", "bounceBTT");
        backToTopButton.classList.remove("fadeBTT");
      }, 10); // Pequeño delay para que `opacity` se aplique correctamente
    } else {
      backToTopButton.classList.add("fadeBTT");
      backToTopButton.classList.remove("visibleBTT", "bounceBTT");

      setTimeout(() => {
        if (window.scrollY <= 300) {
          backToTopButton.style.display = "none";
        }
      }, 250); // Coincide con la duración del fade out
    }
  });

  // Acción al hacer clic: Desplazarse hacia arriba con suavidad
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function headerAnim() {
  document.addEventListener("DOMContentLoaded", function () {});
}
