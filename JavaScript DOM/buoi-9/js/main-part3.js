// - Part-5 : Lưu trữ điểm người chơi và kiểm tra người thắng cuộc
//     - Update số lượng điểm của người chơi hiện tại (điểm tích trữ qua các lần chơi trước + điểm của lần chơi hiện tại)
//     - Nếu điểm của người chơi >= giá trị kết thúc game : 
//         - Sửa tên người chơi đó thành "Winner"
//         - Add class "winnner" cho người chơi đó
//         - Ẩn 2 con súc sắc
//     - Nếu điểm của người chơi < giá trị kết thúc game => đổi lượt chơi

//---------------------- PART 1 //---------------------
// Truy cập vào 
const dice1 = document.querySelector("#dice-1");
const dice2 = document.querySelector("#dice-2");

const btnRoll = document.querySelector('.btn-roll')
const player1Score = document.querySelector("#score-0");
const player2Score = document.querySelector("#score-1");

const btnHold = document.querySelector(".btn-hold");

const btnNewGame = document.querySelector(".btn-new");

let activePlayer; //// định nghĩa người chơi nào đang được chơi (0-player 1 || 1-player2)
let currentScore //điểm lượt chơi hiện tại

let scores;

let isPlaying //Xem người chơi có tiếp tục được chơi Game hay không
  //true -> được chơi
  //false -> dừng chơi

function init() {
  activePlayer = 0; //cho người chơi 1 chơi trước
  currentScore = 0;
  isPlaying = true;

  scores = {
    0: 0, //đại diện cho người chơi: điểm tích lũy
    1: 0 //đại diện cho người chơi: điểm tích lũy
  }

  // Reset tên
  document.querySelector("#name-0").innerText = "Player 1";
  document.querySelector("#name-1").innerText = "Player 2";

  // Reset điểm
  document.querySelector("#score-0").innerText = 0;
  document.querySelector("#score-1").innerText = 0;

  document.querySelector("#current-0").innerText = 0;
  document.querySelector("#current-1").innerText = 0;

  // Ẩn xúc xắc
  dice1.style.display = "none";
  dice2.style.display = "none";

  // Xóa hết class active và winner
  document
    .querySelector(".player-0-panel")
    .classList.remove("active", "winner");
  document
    .querySelector(".player-1-panel")
    .classList.remove("active", "winner");

  // Thêm class active cho active player
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.add("active");
  
  // set lại nút thành false
      // btnRoll.disabled = false;
      // btnHold.disabled = false;
}

// hiển thị ảnh block, set cái số cho ảnh đó để hiển thị
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // Random 2 số num1, num2 từ 1 đến 6
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;

    // Thay đổi src của ảnh theo num 1 và 2
    dice1.src = `./img/dice-${num1}.png`;
    dice2.src = `./img/dice-${num2}.png`;

    // Hiển thị ảnh lên
    dice1.style.display = "block";
    dice2.style.display = "block";

    // Cập nhật điểm
    // Trường hợp cả 2 số vừa random có giá trị != 1. Lúc này sẽ cộng dồn các giá trị thành điểm của lượt chơi hiện tại của người chơi đó
    // Trường hợp 1 trong hai số = 1, reset điểm bằng 0, đổi người chơi
    if (num1 != 1 && num2 != 1) {
      currentScore += num1 + num2;
      document.querySelector(
        `#current-${activePlayer}`
      ).innerText = currentScore;
    } else {
      nextPlayer(); //đổi người chơi
    }
  }
})

function nextPlayer() {
  // đổi người chơi
  if (activePlayer == 0) {
    activePlayer = 1
  } else {
    activePlayer = 0
  }
    // hoặc viết theo toán tử 3 ngôi: activePlayer = activePlayer == 0 ? 1 : 0
  // Ẩn 2 con xúc sắc
  // dice1.style.display = "none";
  // dice2.style.display = "none";
  
  // Chuyển classActive cho người tiếp theo - Class toggle: nếu có thì thêm vào, không có thì bỏ đi
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

  // reset điểm về 0
  currentScore = 0
  document.querySelector(`#current-0`).innerText = 0;
  document.querySelector(`#current-1`).innerText = 0;
}
  

// -------------------PART 5------------------------
// Lưu trữ điểm người chơi và kiểm tra người thắng cuộc
  // ấn vào nút lưu điểm, lấy giá trị điểm hiện tại cộng với giá trị điểm tích lũy
  // so sánh với giá trị mức điểm, nếu lớn hơn hoặc bằng thông báo người thắng cuộc
  // Nếu nhỏ hơn, gọi function nextplayer
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // cập nhật điểm dựa vào biến activePlayer
    scores[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).innerText =
      scores[activePlayer];

    // kiểm tra điểm với điểm mục tiêu
    // Nếu không nhập điểm thì mặc định là 100
    let finalScore = Number(document.querySelector(".final-score").value);

    if (finalScore == 0) {
      finalScore = 50;
    }
    // So sánh với điểm mục tiêu
    // Nếu >= thì tuyên bố người thắng cuộc
    if (scores[activePlayer] >= finalScore) {
      // Người chơi thắng cuộc
      document.querySelector(`#name-${activePlayer}`).innerText = "Winner!";

      // Thêm class Winner
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.add("winner");

      // Ẩn xúc sắc đi
      dice1.style.display = "none";
      dice2.style.dice1 = "none";

      // Khi kết thúc game, không cho ấn vào nút lắc và lưu nữa
      // btnRoll.disabled = true;
      // btnHold.disabled = true;
      isPlaying = false;

      // Còn lại thì đổi người chơi
    } else {
      // đổi người chơi - gọi function nextPlayer ra
      nextPlayer();
    }
  }
});

// Ấn vào nút game mới sẽ gọi ra init function 
btnNewGame.addEventListener('click', function () {
  init();
  console.log('hi')
})

window.onload = init();