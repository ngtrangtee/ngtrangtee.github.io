// 4. Mockup rank list bao gồm các thông tin sau :
//     {
//         name   : string
//         avatar : string
//         score  : number
//     }
//     - Hiển thị rank list
//     - Cập nhật rank list

// Truy cập vào các phần tử DOM
const firstNumberEl = document.querySelector("#primary-number");
const secondNumberEl = document.querySelector("#secondary-number");
const operatorEl = document.querySelector("#operator");
const resultEl = document.querySelector("#result");

const timeEl = document.querySelector(".game-info .time");
const scoreEl = document.querySelector(".game-info .score");
const highScoreEl = document.querySelector(".game-info .high-score");

const listPlayerEl = document.querySelector(".list-player");

// Khai báo biến
let firstNumber;
let secondNumber;
let result;

let operator = ["+", "-", "*"];
let operatorRandom;
let time;
let score;
let highScore = 0;
let interval;

let ranking = [
  {
    name: "Nguyễn Văn A",
    avatar:
      "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/92830425_112092557127949_1835896737181466624_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tm-735wE_oAAX8ku06q&_nc_ht=scontent.fhan3-1.fna&oh=358690da11c4e966586ba195561832ca&oe=609EDA1A",
    score: 5,
  },
  {
    name: "Nguyễn Văn B",
    avatar:
      "https://www.rainforest-alliance.org/sites/default/files/styles/large/public/2016-10/nine-banded-armadillo-square.jpg?itok=kJ-u3vEJ",
    score: 9,
  },
  {
    name: "Nguyễn Văn C",
    avatar:
      "https://www.rainforest-alliance.org/sites/default/files/styles/large/public/2016-10/nine-banded-armadillo-square.jpg?itok=kJ-u3vEJ",
    score: 8,
  },
];

// Để khi ấn vào chỗ chơi lại thì mình không cần gọi ra từ đầu nữa
function init() {
  time = 15;
  score = 0;

  timeEl.innerText = `${time}s`;
  scoreEl.innerText = score;
  highScoreEl.innerText = highScore;

  randomNumber();
  // Nhưng highscore không reset
  renderRanking(ranking);

  // Đếm ngược thời gian bằng set interval
  // Mỗi 1 giây thì update time 1 lần
  interval = setInterval(updateTime, 1000);

  // Clear nội dung input
  resultEl.value = "";
}
function updateTime() {
  time--;
  timeEl.innerText = `${time}s`;

  if (time == 0) {
    clearInterval(interval);

    // Cập nhật điểm cao nhất
    updateHighScore();

    // Cập nhật ranking
    updateRanking()

    // Delay, sau khoảng 2 giây cho chơi lại game
    setTimeout(init, 2000);
  }
}

function updateScore() {
  score++;
  scoreEl.innerText = score;
}

function updateHighScore() {
  highScore = Math.max(highScore, score);
  highScoreEl.innerText = highScore;
}

function updateRanking() {
  let record = {
    name: "Ngô Văn D",
    avatar:
      "https://www.planetware.com/photos-large/VIE/vietnam-danang-beach.jpg",
    score: score,
  };

  ranking.push(record)
  renderRanking(ranking)
}

// Random số và biểu thức
function randomNumber() {
  // Random số
  firstNumber = Math.floor(Math.random() * 9 + 1);
  secondNumber = Math.floor(Math.random() * 9 + 1);

  // Random biểu thức
  operatorRandom = operator[Math.floor(Math.random() * operator.length)];

  // Tính toán kết quả
  result = eval(`${firstNumber} ${operatorRandom} ${secondNumber}`);

  // Hiển thị lên trên giao diện
  firstNumberEl.innerText = firstNumber;
  secondNumberEl.innerText = secondNumber;
  operatorEl.innerText = operatorRandom;
}

// Xử lý sự kiện khi ấn vào nút kiểm tra
resultEl.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    // Lấy kết quả trong ô input
    let value = resultEl.value;

    // Kiểm tra input rỗng
    if (value == "" || time == 0) {
      return;
    }

    // Đối chiếu kết quả
    if (Number(value) == result) {
      randomNumber();
      resultEl.value = "";
      // Update score
      updateScore();
    } else {
      resultEl.value = "";
      return;
    }
  }
});

function renderRanking(arr) {
  let arrSort = arr.sort(function (a, b) {
    return b.score - a.score;
  });

  listPlayerEl.innerHTML = "";

  for (let i = 0; i < arrSort.length; i++) {
    listPlayerEl.innerHTML += `
            <div class="list-item">
                <div class="list-rank">${i +1}</div>
                <div class="list-info">
                    <img src="${arr[i].avatar}" alt="${arr[i].name}">
                    <div class="info">
                        <span class="name">${arr[i].name}</span>
                    </div>
                </div>
                <div class="list-score">
                    <span class="top-item-icon"><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span class="top-item-point">${arr[i].score}</span>
                </div>
            </div>
        `;
  }
}

// Gọi function init ra
// onload là khi trang web load xong html, css (đã xuất hiện dom), thì init mới xuất hiện
window.onload = init;
