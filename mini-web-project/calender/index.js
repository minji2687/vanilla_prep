let calenderWrap = document.querySelector(".calender_wrap");
let sun = document.querySelector(".sun");
let mon = document.querySelector(".mon");
let tue = document.querySelector(".tue");
let wed = document.querySelector(".wed");
let thu = document.querySelector(".thu");
let fri = document.querySelector(".fri");
let sat = document.querySelector(".sat");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const daysTable = document.querySelector(".days");
const displayDay = document.querySelector(".displayDay");
const displayDate = document.querySelector(".displayDate");
const displayMonthAndYear = document.querySelector(".displayMonthAndYear");

let SUN = [];
let MON = [];
let TUE = [];
let WED = [];
let THU = [];
let FRI = [];
let SAT = [];

let days = [SUN, MON, TUE, WED, THU, FRI, SAT];

function createElementDate(date, day) {
  let p = document.createElement("p");
  p.style.textAlign = "center";
  if (date === 0) {
    p.innerText = date;
    p.style.visibility = "hidden";
  } else {
    p.innerText = date;
  }
  p.dataset.date = date;
  p.dataset.day = day;
  return p;
}

function getDateToString(day, date) {
  switch (day) {
    case 0:
      SUN.push(date);
      sun.insertAdjacentElement("beforeend", createElementDate(date, "SUN"));
      return "SUN";

    case 1:
      MON.push(date);
      mon.insertAdjacentElement("beforeend", createElementDate(date, "MON"));
      return "MON";

    case 2:
      TUE.push(date);
      tue.insertAdjacentElement("beforeend", createElementDate(date, "TUE"));
      return "TUE";

    case 3:
      WED.push(date);
      wed.insertAdjacentElement("beforeend", createElementDate(date, "WED"));
      return "WED";

    case 4:
      THU.push(date);
      thu.insertAdjacentElement("beforeend", createElementDate(date, "THU"));
      return "THU";

    case 5:
      FRI.push(date);
      fri.insertAdjacentElement("beforeend", createElementDate(date, "FRI"));
      return "FRI";

    case 6:
      SAT.push(date);
      sat.insertAdjacentElement("beforeend", createElementDate(date, "SAT"));
      return "SAT";
  }
}

// 현재 월의 마지막 날짜까지 달력에 표기하기
function displayCalender(year, month) {
  let date = 1;
  const getDateString = new Date(`${year}-${month}-${date}`).toDateString();
  let monthString = getDateString.split(" ")[1];

  for (let i = 0; i < 32; i++) {
    const getDate = new Date(`${year}-${month}-${date}`).getDate();
    const getDay = new Date(`${year}-${month}-${date}`).getDay();
    if (!(date === 31 && getDate === 1) || !getDate === NaN) {
      if (date === 1 && getDay > 0) {
        for (let i = 0; i < getDay; i++) {
          getDateToString(i, 0);
        }
      }
      getDateToString(getDay, date);
      displayMonthAndYear.innerText = `${year} ${monthString}`;
      date++;
    }
  }
}

// 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
let currentMonth = 1;
let currentYear = 2021;
prev.addEventListener("click", () => {
  currentMonth = currentMonth - 1;
  if (!currentMonth) {
    currentYear--;
    currentMonth = 12;
  }
  reset();

  displayCalender(currentYear, currentMonth);
});

next.addEventListener("click", () => {
  currentMonth = currentMonth + 1;
  if (currentMonth === 13) {
    currentYear++;
    currentMonth = 1;
  }
  reset();
  displayCalender(currentYear, currentMonth);
});

displayCalender(currentYear, currentMonth);

function reset() {
  let columns = document.querySelectorAll(".column");
  columns.forEach((col) => {
    col.innerHTML = "";
  });
  days.forEach((day) => {
    day = [];
  });
}

daysTable.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIV") {
    return;
  }
  console.dir(e.target);
  displayDay.innerText = e.target.dataset.day;
  displayDate.innerText = e.target.dataset.date;
});
