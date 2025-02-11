const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)); 
AOS.init();

headerAnim();
bttAnim();

function bttAnim() {
  const backToTopButton = document.getElementById("backToTop");

  backToTopButton.classList.add("fadeBTT");
  backToTopButton.classList.add("bounceBTT");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
      setTimeout(() => {
        backToTopButton.classList.add("visibleBTT", "bounceBTT");
        backToTopButton.classList.remove("fadeBTT");
      }, 10);
    } else {
      backToTopButton.classList.add("fadeBTT");
      backToTopButton.classList.remove("visibleBTT", "bounceBTT");

      setTimeout(() => {
        if (window.scrollY <= 300) {
          backToTopButton.style.display = "none";
        }
      }, 250);
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function headerAnim() {
  const header = document.querySelector("header");

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
}

