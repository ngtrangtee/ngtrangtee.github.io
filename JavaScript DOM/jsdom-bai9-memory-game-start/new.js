// Truy cập vào các phần tử DOM
const startGameEl = document.querySelector('#start-game'); // Màn start game
const gameEl = document.querySelector('#game'); // Màn chơi game
const endGameEl = document.querySelector('#end-game'); // Màn end game

const levelOptionEl = document.querySelector('#level-option'); // Ô chọn level game
const memoryGameEl = document.querySelector('.memory-game'); // Nơi hiển thị danh sách card

const btnStartGame = document.querySelector('#btn-start-game'); // Nút bắt đầu game
const btnPlayAgain = document.querySelector('#btn-play-again'); // Nút chơi lại
const btnReload = document.querySelector('#btn-reload'); // Nút thoát game

const timeEl = document.querySelector('#time'); // Nơi hiển thị thời gian chơi game
const stepEl = document.querySelector('#step'); // Nơi hiển thị số bước chơi game

// Khai báo biến
let level;

let sizes = {
    2: {  // 4 cards
        row: 2,
        col: 2,
    },
    4: { //8 cards
        row: 2,
        col: 4,
    },
    6: { //12 cards
        row: 3,
        col: 4,
    },
};

let listCards = [
    {
        url:
            'https://i.pinimg.com/564x/9f/2f/72/9f2f72f1c63e6c62ac0ca3781e270975.jpg',
        name: 'luffy',
    },
    {
        url:
            'https://i.pinimg.com/236x/d3/3f/c0/d33fc0cd1bf76766555436c2307b94d7.jpg',
        name: 'zoro',
    },
    {
        url:
            'https://i.pinimg.com/236x/c2/b4/49/c2b4490285a27881586d3e8c49c4b565.jpg',
        name: 'sanji',
    },
    {
        url:
            'https://i.pinimg.com/236x/fb/a8/ce/fba8cec6aa3a5faa06b0d5f9a21401ed.jpg',
        name: 'ace',
    },
    {
        url:
            'https://i.pinimg.com/236x/74/60/51/7460514fb2e69b574011f4028fc159e3.jpg',
        name: 'rayleigh',
    },
    {
        url:
            'https://i.pinimg.com/236x/22/9c/d0/229cd0ef7f252de6aab514c0fbe5989b.jpg',
        name: 'sabo',
    },
];

// Xử lý khi bấm vào nút bắt đầu game
    // Chọn số lượng card
    // init game
    // 4 cards: lấy ra value 4 card để cắt ra bằng số lượng phần tử từ value đấy rồi nhân đôi lên 
    // đảo vị trí của các phần tử
    // render

btnStartGame.addEventListener('click', function () {
  // Lấy ra được level
    level = Number(levelOptionEl.value)
    console.log(level, typeof(level))
    
  // Ẩn START => show GAME
  startGameEl.style.display = "none";
  gameEl.style.display = "flex";

    // render cards
    renderCards(level)
    
// Xử lý khi bấm vào nút chơi lại
btnPlayAgain.addEventListener('click', function () {
    // Ẩn END => show GAME
    endGameEl.style.display = 'none';
    gameEl.style.display = 'flex';

    // // Demo chuyển từ GAME => END
    // setTimeout(function () {
    //     gameEl.style.display = 'none';
    //     endGameEl.style.display = 'flex';
    // }, 3000);
});

// Xử lý khi bấm vào nút thoát game
btnReload.addEventListener('click', function () {
    // RELOAD lại trang web
    window.location.reload();
});
    
function shuffle(arr) {
    return arr.sort(function () {
        return Math.random() - 0.5;
       })
   } 
function renderCards(level) {
// Đảo vị trí mảng listCards
    listCards = shuffle(listCards)
// Cắt số phần tử trong mảng listCards dựa vào level 
    let cardsSlice = listCards.slice(0, level)

// Nhân đôi số lượng phần tử
    cards = [...cardsSlice, ...cardsSlice] //cách 2
// Đảo vị trí
    cards = shuffle(cards)
// Set kích thước cho game
    let size = sizes[level]
    memoryGameEl.style.gridTemplateColumns = `repeat(${size.col}, 190px)`
    memoryGameEl.style.gridTemplateRows = `repeat(${size.row}, 250px)`
    console.log(size)
        
// Hiển thị lên giao diện     
    memoryGameEl.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        memoryGameEl.innerHTML += `
        <div class="memory-game">
                <div
                class="memory-card"
                data-name="${c.name}"
                onclick="flipCard(this)"
                >
                    <img src="${c.url}" class="front-face" alt="${c.name}">
                    class = "back-face" alt ="card-back"
                </div>
        `;
    }
}
    


