document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById("burgerSpace");
  let container = document.getElementById("canvasContainer");
  let basePath = window.location.pathname.includes("/pages/en/") ? "../../" : "";

  const imagenes = {
    img1: basePath + "rsc/sprites/burger1.png",
    img2: basePath + "rsc/sprites/burger2.png"
  };

  let ctx = canvas.getContext("2d");

  let burgerY = 60;
  let direction = 1;
  let speed = 0.5;
  let animationId = null;
  let state = true;
  let img = new Image(),
    star = new Image();

  function resizeCanvas() {
    canvas.width = container.offsetWidth - 25;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  let stars = [
    { x: canvas.width - 120, y: 40, frameIndex: 0, speed: 2 },
    { x: canvas.width, y: 10, frameIndex: 1, speed: 1 },
    { x: canvas.width - 50, y: 140, frameIndex: 2, speed: 3 },
    { x: canvas.width - 280, y: 160, frameIndex: 0, speed: 2 },
    { x: canvas.width - 240, y: 0, frameIndex: 2, speed: 2 },
    { x: canvas.width - 320, y: 100, frameIndex: 3, speed: 1 }
  ];

  img.src = imagenes.img1;
  star.src = basePath + "rsc/sprites/star-spritesheet.png";

  function draw() {
    ctx.imageSmoothingEnabled = false;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#100c14";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((starObj) => {
        let frameX = starObj.frameIndex * 20;
        ctx.drawImage(star, frameX, 0, 20, 20, starObj.x, starObj.y, 20, 20);

        starObj.x -= starObj.speed;
        if (starObj.x < -20) {
          starObj.x = canvas.width + 20;
        }
      });

      // 2. Dibujar la hamburguesa (capa adelante)
      ctx.drawImage(img, (canvas.width - 600) / 2, burgerY - 10, 320, 60);

      burgerY += speed * direction;
      if (burgerY >= 90 || burgerY <= 60) {
        direction *= -1;
      }

      animationId = requestAnimationFrame(animate);
    }

    if (animationId) cancelAnimationFrame(animationId);
    animate();
  }

  resizeCanvas();
  draw();

  setInterval(function () {
    state = !state;
    img.src = state ? imagenes.img2 : imagenes.img1;

    stars.forEach((starObj) => {
      starObj.frameIndex = (starObj.frameIndex + 1) % 4;
    });
  }, 100);

  window.addEventListener("resize", () => {
    resizeCanvas();
    draw();
  });
});
