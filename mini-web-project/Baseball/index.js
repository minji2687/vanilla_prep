const startButton = document.querySelector(".start_button");
const restartButton = document.querySelector(".restart_button");
let inputs = document.querySelectorAll(".inputNum");
let inputWrap = document.querySelector(".inputWrap");
const strikeScoreDisplay = document.querySelector(".strikeScore");
const ballScoreDisplay = document.querySelector(".ballScore");

restartButton.style.display = "none";
inputWrap.style.display = "none";

startButton.addEventListener("click", () => {
  inputWrap.style.display = "block";
  startButton.style.display = "none";
});

restartButton.addEventListener("click", () => {
  inputs.forEach((input) => {
    console.dir(input);
    input.value = "";
    input.readOnly = false;
    restartButton.style.display = "none";
    retryNum = 10;
  });
});

let createRandomNum = [];
for (let i = 0; i < 3; i++) {
  createRandomNum.push(Math.floor(Math.random() * 10));
}

console.log(createRandomNum);

let inputNums = [];
function inputCheck() {
  inputs.forEach((input) => {
    if (input.value === "") {
      return;
    }
    inputNums.push(input.value);
  });
  return inputNums;
}

let strike = 0;
let ball = 0;
let retryNum = 10;

function tryGame() {
  let inputNumsArr = inputNums.map((num) => parseInt(num));
  createRandomNum.forEach((num, index) => {
    if (num === inputNumsArr[index]) {
      strike++;
    } else if (num !== inputNumsArr[index] && inputNumsArr.includes(num)) {
      ball++;
    }
  });
  retryNum -= 1;
}
window.addEventListener("keypress", (e) => {
  if (!retryNum) {
    alert("주어진 횟수가 끝났습니다");
    inputs.forEach((input) => {
      console.dir(input);
      input.readOnly = true;
    });
    restartButton.style.display = "block";
    //input을 막기
  }
  if (e.code === "Enter") {
    if (inputCheck().length < 3) {
      alert("입력값을 입력해주세요");
    }
    tryGame();
    displayScore();
    reset();
  }
  console.log(inputNums);
  console.log(` strike${strike}`);
  console.log(`ball ${ball}`);
});

function reset() {
  inputNums = [];
  strike = 0;
  ball = 0;
}

function displayScore() {
  strikeScoreDisplay.innerText = `${strike} strike `;
  ballScoreDisplay.innerText = `${ball} ball`;
}

// 게임 재시작 버튼을 만들고, 재시작 할 수 있도록 합니다.
