// Truy cập vào các phần tử DOM
const firstNumberEl = document.querySelector("#primary-number");
const secondNumberEl = document.querySelector("#secondary-number");
const operatorEl = document.querySelector("#operator");
const resultEl = document.querySelector("#result");

const timeEl = document.querySelector(".game-info .time");
const scoreEl = document.querySelector(".game-info .score");
const highScoreEl = document.querySelector(".game-info .high-score");

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

// Để khi ấn vào chỗ chơi lại thì mình không cần gọi ra từ đầu nữa
function init() {
  time = 15;
  score = 0;

  timeEl.innerText = `${time}s`;
  scoreEl.innerText = score;
  highScoreEl.innerText = highScore;

  randomNumber();
  // Nhưng highscore không reset

  // Đếm ngược thời gian bằng set interval
  // Mỗi 1 giây thì update time 1 lần
    interval = setInterval(updateTime, 1000);
    
    // Clear nội dung input
    resultEl.value = '';
}
function updateTime() {
    time--;
    timeEl.innerText = `${time}s`;

    if (time == 0) {
        clearInterval(interval)

        // Cập nhật điểm cao nhất
        updateHighScore();

        // Delay, sau khoảng 2 giây cho chơi lại game
        setTimeout(init, 2000) 
    }
}

function updateScore() {
    score++;
    scoreEl.innerText = `${score}`
}

function updateHighScore() {
    highScore = Math.max(highScore, score);
    highScoreEl.innerText = highScore
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

// Gọi function init ra
// onload là khi trang web load xong html, css (đã xuất hiện dom), thì init mới xuất hiện
window.onload = init;
