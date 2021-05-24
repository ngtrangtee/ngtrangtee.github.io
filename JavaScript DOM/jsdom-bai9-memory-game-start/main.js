// Truy cập vào các phần tử DOM
const startGameEl = document.querySelector("#start-game"); // Màn start game
const gameEl = document.querySelector("#game"); // Màn chơi game
const endGameEl = document.querySelector("#end-game"); // Màn end game

const levelOptionEl = document.querySelector("#level-option"); // Ô chọn level game
const memoryGameEl = document.querySelector(".memory-game"); // Nơi hiển thị danh sách card

const btnStartGame = document.querySelector("#btn-start-game"); // Nút bắt đầu game
const btnPlayAgain = document.querySelector("#btn-play-again"); // Nút chơi lại
const btnReload = document.querySelector("#btn-reload"); // Nút thoát game

const timeEl = document.querySelector("#time"); // Nơi hiển thị thời gian chơi game
const stepEl = document.querySelector("#step"); // Nơi hiển thị số bước chơi game

// Khai báo biến
let level;
let firstCard;
let secondCard;
let time = 0
let step = 0;
let interval;
let score = 0; //nếu score bằng giá trị của level thì chuyển qua màn endgame

let isLock = false;

let sizes = {
  2: {
    // 4 cards
    row: 2,
    col: 2,
  },
  4: {
    // 8 cards
    row: 2,
    col: 4,
  },
  6: {
    // 12 cards
    row: 3,
    col: 4,
  },
};

let listCards = [
  {
    url:
      "https://i.pinimg.com/564x/9f/2f/72/9f2f72f1c63e6c62ac0ca3781e270975.jpg",
    name: "luffy",
  },
  {
    url:
      "https://i.pinimg.com/236x/d3/3f/c0/d33fc0cd1bf76766555436c2307b94d7.jpg",
    name: "zoro",
  },
  {
    url:
      "https://i.pinimg.com/236x/c2/b4/49/c2b4490285a27881586d3e8c49c4b565.jpg",
    name: "sanji",
  },
  {
    url:
      "https://i.pinimg.com/236x/fb/a8/ce/fba8cec6aa3a5faa06b0d5f9a21401ed.jpg",
    name: "ace",
  },
  {
    url:
      "https://i.pinimg.com/236x/74/60/51/7460514fb2e69b574011f4028fc159e3.jpg",
    name: "rayleigh",
  },
  {
    url:
      "https://i.pinimg.com/236x/22/9c/d0/229cd0ef7f252de6aab514c0fbe5989b.jpg",
    name: "sabo",
  },
];

let cards;

// Đảo vị trí các phần tử trong mảng
function shuffle(arr) {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
}

function renderCards(level) {
  // Đảo vị trí mảng listCards
  listCards = shuffle(listCards);

  // Cắt số phần tử trong mảng listCards dựa vào level
  let cardsSlice = listCards.slice(0, level);

  // Nhân đôi số lượng phần tử || ví dụ :[1,2] => [1,2,1,2]
  // cards = cardsSlice.concat(cardsSlice) => cách 1
  cards = [...cardsSlice, ...cardsSlice]; // Cách 2

  // Đảo vị trí
  cards = shuffle(cards);

  // Set kích thước cho game
  let size = sizes[level];
  console.log(size);
  memoryGameEl.style.gridTemplateColumns = `repeat(${size.col}, 190px)`;
  memoryGameEl.style.gridTemplateRows = `repeat(${size.row}, 250px)`;

  // Hiển thị lên giao diện
  memoryGameEl.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    memoryGameEl.innerHTML += `
            <div 
                class="memory-card" 
                data-name="${c.name}" 
                onclick="flipCard(this)" //this là
            >
                <img src="${c.url}" class="front-face" alt="${c.name}">
                <img src="https://i.pinimg.com/originals/b9/70/33/b97033a8708d2cbaf7d1990020a89a54.jpg" class="back-face" alt="card-back">
            </div>
        `;
  }
}

// Lật card
// Lật card 1, card 2
// Lưu giá trị của 2 card
// SO sánh giá trị card 1 & 2, nếu giống nhau về data-name thì giữ nguyên mở (thêm class flip)
// Nếu 2 card khác nhau thì úp xuống để thực hiện lần tiếp
function flipCard(card) {
  if (isLock) {
    return; // Không đi xuống các đoạn bên dưới nữa, kết thúc hàm
  }
  // Không cho phép ấn 2 lần vào 1 card
  if (card == firstCard) {
    return; //Kết thúc hàm
  }

  card.classList.toggle("flip");

  // Khi ấn vào first card -> Nếu chưa tồn tại firstCard, thì gán giá trị vào card vừa ấn
  if (!firstCard) {
    firstCard = card;
    return;
  }

  // Khi ấn vào second card ->
  secondCard = card;

  // Kiểm tra 2 card
  // Nếu trùng -> Không cho người dùng click vào trong khi đang kiểm tra
  // Nếu khác
  checkCard();

  // Update số bước
  updateStep();
}

// Kiểm tra xem giá trị name có trùng nhau hay không
function checkCard() {
  // Nếu trùng, không cho ấn nữa; Nếu không trùng, úp lại cards
  if (firstCard.dataset.name == secondCard.dataset.name) {
      disableCards();
      score++ //tăng score
      checkEndGame() //Xử lí end game

  } else {
      unflipCards();
  }
}

function disableCards() {
  // Xóa sự kiện ở card trùng nhau
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  //   Thêm thuộc tính disabled cho card
  firstCard.style.pointerEvents = "none";
    secondCard.style.pointerEvents = "none";
    
  // Reset Game Board, cho second và first card về giá trị rỗng để lúc sau gán lại
  resetGame();
}

function checkEndGame() {
    if (score == level) {
        clearInterval(interval) //dừng thời gian
    //chuyển sang màn end game sau khi delay 1.5s
        setTimeout(() => {
            gameEl.style.display = 'none';
            endGameEl.style.display = 'flex'

            // Cập nhật thông tin endgame
            document.querySelector('.time-box p').innerText = convertTime(time);
            document.querySelector('.step-box p').innerText = `${step} bước`
        }, 1500);
    }
}

function resetGame() {
    firstCard = null;
    secondCard = null;
    isLock = false
}

function unflipCards() {
    //delay rồi ms úp
    isLock = true

    // Sau delay 1s thì úp lại - remove class flip
    setTimeout(function () {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetGame();

    }, 1000)
}
// Xử lý khi bấm vào nút bắt đầu game
btnStartGame.addEventListener("click", function () {
  // Lấy level game
  level = Number(levelOptionEl.value);

  // Ẩn START => show GAME
  startGameEl.style.display = "none";
  gameEl.style.display = "flex";

  // Render cards
    renderCards(level);
    
    // Chạy thời gian 
    inverval = setInterval(updateTime, 1000)
});

function updateTime() {
    time++
    timeEl.innerText = convertTime(time)
}

function updateStep() {
    step++
    stepEl.innerText = `${step} bước`;
}

// Ban đầu: 00:00 => 00:15 => 01:00
function convertTime(time) {
    let minute = `0${Math.floor(time / 60)}`.slice(-2);
    //vd: 40 => 00 slice(-2) => 00
    //vd: 660 => 011 slice(-2) ==> 11
    let second = `0${time % 60}`.slice(-2)
    return `${minute}:${second}s`
}

// Xử lý khi bấm vào nút chơi lại
btnPlayAgain.addEventListener("click", function () {
    // Reset các thành phần 
    score = 0;
    time = 0;
    step = 0;

    timeEl.innerText = convertTime(time);
    stepEl.innerText = `${step} bước`;

    // Chạy lại thời gian
    interval = setInterval(updateTime, 1000)

    // Hiển thị card lại 
    renderCards(level)

    // Ẩn END => show GAME
  endGameEl.style.display = "none";
    gameEl.style.display = "flex";

});

// Xử lý khi bấm vào nút thoát game
btnReload.addEventListener("click", function () {
  // RELOAD lại trang web
  window.location.reload();
});
