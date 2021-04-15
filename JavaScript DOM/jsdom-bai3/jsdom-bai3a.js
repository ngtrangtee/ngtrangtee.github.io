const scoreEle = document.getElementById("score");
const containerEl = document.getElementById("container");

// Khai báo biến
let score = 0;
let interval;
let num = 50;
let arrayPoints = [];

const board = {
  width: 1000,
  height: 600,
  color: "#ffda79",
};

let boss = {
  width: 80,
  height: 80,
  color: "red",
  speedX: 0,
  speedY: 0,
  x: 40,
  y: 40,
  radius: 40,
};

let point = {
  width: 30,
  height: 30,
  color: "green",
  x: 0,
  y: 0,
  radius: 15,
};

// Setup game board
containerEl.style.width = `${board.width}px`;
containerEl.style.height = `${board.height}px`;
containerEl.style.backgroundColor = board.color;

// Vẽ con boss ăn điểm
function draw(obj) {
  let objEle = document.createElement("div");
  objEle.classList.add("boss");
  objEle.style.width = `${obj.width}px`;
  objEle.style.height = `${obj.height}px`;

  objEle.style.top = `${obj.y - obj.width / 2}px`;
  objEle.style.left = `${obj.x - obj.height / 2}px`;

  objEle.style.backgroundColor = obj.color;

  containerEl.appendChild(objEle);
}

draw(boss);

// Random số trong khoảng max - min
function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function creatPoints() {
  for (let i = 0; i < num; i++) {
    let posX = randomPosition(point.width, board.width - point.width);
    let posY = randomPosition(point.height, board.height - point.height);

    arrayPoints.push({
      width: 30,
      height: 30,
      color: "green",
      x: posX,
      y: posY,
    });
  }
}
creatPoints();

// Vẽ các point lên trên màn hình
function drawPoints() {
  for (let i = 0; i < arrayPoints.length; i++) {
    draw(arrayPoints[i]);
  }
}

drawPoints();

// Kiểm tra tính va chạm của boss và point
function checkCollision(boss, point) {
  let distance = Math.sqrt((boss.x - point.x) ** 2 + (boss.y - point.y) ** 2)
    let sumRadius = boss.radius + point.radius;
  if (distance < sumRadius) {
    return true
  }
return false
}

// Lắng nghe sự kiện khi người chơi bấm vào các phím mũi tên
// keydown : Nhấn phím xuống
// keyup : Nhả phím ra
// keypress : Nhấn và giữ phím
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 37) {
    boss.speedX = -2;
    boss.speedY = 0;
  }
  if (e.keyCode == 39) {
    boss.speedX = 2;
    boss.speedY = 0;
  }
  if (e.keyCode == 38) {
    boss.speedX = 0;
    boss.speedY = -2;
  }
  if (e.keyCode == 40) {
    boss.speedX = 0;
    boss.speedY = 2;
  }
});

function updateBoss() {
  boss.x = boss.x + boss.speedX;
  boss.y = boss.y + boss.speedY;

  draw(boss);
}

function updateGame() {
  containerEl.innerHTML = ""; // Clear hết khung hình
  updateBoss(); // Cập nhật vị trí boss
  draw(boss); // Vẽ lại boss
  //Kiểm tra va chạm
  for (let i = 0; i < arrayPoints.length; i++) {
    if (checkCollision(boss, arrayPoints[i])) {
      arrayPoints.splice(i, 1)
      score++
      scoreEle.innerText = score;
    }
  }
}

function gameLoop() {
  interval = setInterval(() => {
    updateGame();
  }, 1000 / 60);
}

// gameLoop();
