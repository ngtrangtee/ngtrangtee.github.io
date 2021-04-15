// Tạo game board
const scoreEle = document.getElementById('score');
const containerEle = document.getElementById('container')

// Khai báo biến
let score = 0;
let interval;
let num = 50;
let arrayPoints = [];


// Biển diễn các đội tượng: Gameboard, boss, point, score vào object
    // Board
const board = {
    width: 1000,
    height: 600,
    color: '#EFA355',
};

    // Boss
let boss = {
    width: 80,
    height: 80,
    color: '#421E22',
    speedX: 0,
    speedY: 0,
    x: 40,
    y : 40,
}

    // Point: thức ăn cho boss

let point = {
    width: 30,
    height: 30,
    color: '#58A6A6',
    x: 0,
    y: 0,
    radius: 15
}

// Set up gameboard
containerEle.style.width = `${board.width}px`;
containerEle.style.height = `${board.height}px`;
containerEle.style.backgroundColor = board.color;

// Vẽ con boss ăn điểm
function draw(obj) {
    let objEle = document.createElement('div');
    objEle.classList.add('boss');
    objEle.style.width = `${boss.width}px`;
    objEle.style.height = `${boss.height}px`;

    objEle.style.top = `${boss.y - boss.width / 2}px`;
    objEle.style.left = `${boss.x - boss.height / 2}px`;

    objEle.style.backgroundColor = boss.color;

    containerEle.appendChild(objEle);
} draw(boss);

function randomPosition(min, max) {
  return Math.floor(Math.random(max) * (max - min) + min);
}

// Random vị trí points
function createPoints() {
    for (let i = 0; i < num; i++) {
        let posX = randomPosition(point.width, board.width - point.width);
        let posY = randomPosition(point.height, board.height - point.height);

        arrayPoints.push({
            width: 30,
            height: 30,
            color: '#58A6A6',
            x: posX,
            y: posY,
        });
    }
    console.log(arrayPoints);
}
createPoints();

// Vẽ các point lên trên màn hình
function drawPoints() {
    for (let i = 0; i < arrayPoints.length; i++) {
        draw(arrayPoints[i])
    }

}
drawPoints()

// Kiểm tra tính va chạm của point và board
function checkCollision(board, point) {

}

// Sự kiện bàn phím
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 37) {
        boss.speedX = -2
        boss.speedY = 0
    }
    if (e.keyCode == 39) {
        boss.speedX = 2
        boss.speedY = 0
    }
    if (e.keyCode == 38) {
        boss.speedX = 0
        boss.speedY = -2
    }
    if (e.keyCode == 40) {
        boss.speedX = 0
        boss.speedY = 2
    }
})

// truyền vào vận tốc, đổi vị trí
function updateBoss() {
    boss.x = boss.x + boss.speedX;
    boss.y = boss.y + boss.speedY;

    console.log(boss.x, boss.y);

 draw(boss);
}

function updateGame() {
    containerEle.innerHTML = ''; //clear hết khung hình
    updateBoss();
 draw(boss);
}

function gameLoop() {
    interval = setInterval(() => {
        updateGame();
    }, 1000 / 60);
}

// gameLoop();