// - Part-3 : Xử lý khi lắc xúc xắc
//     - Lắng nghe sự kiện khi người chơi ấn nút "Lắc xúc xắc"
//     - Random 2 số có giá trị từ 1 -> 6
//     - Dựa vào giá trị vừa random, Hiển thị ảnh xúc xắc tương ứng với giá trị random ở trên
//     - Cập nhật điểm
//     - Trường hợp cả 2 số vừa random có giá trị != 1. Lúc này sẽ cộng dồn các giá trị thành điểm của lượt chơi hiện tại của người chơi đó
//     - Trường hợp 1 trong 2 số vừa random có giá trị = 1 => đổi lượt chơi cho người khác

// - Part-4 : Xử lý khi đổi người chơi
//     - Khi đổi lượt chơi, cần kiểm tra người chơi hiện tại là người chơi nào. Nếu là người chơi 1 => đổi thành người chơi 2 và ngược lại
//     - Ẩn 2 con súc sắc
//     - Chuyển class "active" cho người chơi tiếp theo
//     - Reset điểm hiện tại của cả 2 người chơi = 0

//---------------------- PART 1 //---------------------
// Truy cập vào 
const dice1 = document.querySelector("#dice-1");
const dice2 = document.querySelector("#dice-2");

const btnRoll = document.querySelector('.btn-roll')
const player1Score = document.querySelector("#score-0");
const player2Score = document.querySelector("#score-1");

let activePlayer; //// định nghĩa người chơi nào đang được chơi (0-player 1 || 1-player2)
let currentScore //điểm lượt chơi hiện tại
function init() {
  activePlayer = 0; //cho người chơi 1 chơi trước
  currentScore = 0

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
}

// hiển thị ảnh block, set cái số cho ảnh đó để hiển thị
btnRoll.addEventListener('click', function () {
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
    currentScore += num1 + num2
    document.querySelector(`#current-${activePlayer}`).innerText = currentScore
  } else {
    nextPlayer() //đổi người chơi
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
  dice1.style.display = "none";
  dice2.style.display = "none";
  
  // Chuyển classActive cho người tiếp theo - Class toggle: nếu có thì thêm vào, không có thì bỏ đi
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

  // reset điểm về 0
  currentScore = 0
  document.querySelector(`#current-0`).innerText = 0;
  document.querySelector(`#current-1`).innerText = 0;
}
    
window.onload = init();

