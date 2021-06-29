const image = document.querySelector(".image");
const dots = document.querySelector(".dots");
const dotAll = document.querySelectorAll(".dot");
const prev = document.querySelector(".arrow_left");
const next = document.querySelector(".arrow_right");

let current = null;

image.src = `./images/image-1.png`;

dotAll.forEach((dot, index) => {
  console.log(dot, index);
  dot.addEventListener("click", () => {
    image.src = `./images/image-${index + 1}.png`;
    current = index;
  });
});

prev.addEventListener("click", () => {
  if (current === 0) {
    current = 4;
  } else {
    current -= 1;
  }
  image.src = `./images/image-${current + 1}.png`;
});

next.addEventListener("click", () => {
  if (current === 4) {
    current = 0;
  } else {
    current += 1;
  }
  image.src = `./images/image-${current + 1}.png`;
});
