const wrap = document.querySelector(".wrap");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  let hexCode = changeColor();
  console.log(hexCode);

  wrap.style.background = hexCode;
  button.style.color = hexCode;
});

function changeColor() {
  const alpabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let hexCode = "";
  for (let i = 0; i < 6; i++) {
    hexCode += alpabet[Math.floor(Math.random() * alpabet.length)];
  }
  return `#${hexCode}`;
}

// 0~9까지의 숫자와 A~F까지의 알파벳이 랜덤하게 구성되어 이루는 6자리 코드를 의미합니다.
// 예를 들면 000000, 3474FF 등 모두 유효한 Hex Code입니다. CSS에서는 Hex Code앞에 #를 붙여 색상값으로 이용할 수 있습니다.
