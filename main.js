const parallaxBox = document.querySelector(".parallax");
const layers = parallaxBox.querySelectorAll(".parallax__layer");

const parallax = (evt) => {
  const parallaxWidth = parallaxBox.offsetWidth;
  const parallaxHeight = parallaxBox.offsetHeight;

  const coordX = evt.clientX - parallaxWidth / 2;
  const coordY = evt.clientY - parallaxHeight / 2;

  layers.forEach((layer) => {
    const layerSpeed = layer.dataset.speed;
    const x = (coordX * layerSpeed).toFixed(1);
    const y = (coordY * layerSpeed).toFixed(1);
    layer.setAttribute("style", `transform: translate(${x}px, ${y}px)`);
  });
};

const stopParallax = (evt) => {
  layers.forEach((layer) => {
    layer.removeAttribute("style");
  });
};

parallaxBox.addEventListener("mousemove", parallax);
parallaxBox.addEventListener("mouseleave", stopParallax);
