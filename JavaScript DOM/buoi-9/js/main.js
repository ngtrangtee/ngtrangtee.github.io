document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = `./img/dice-${dice1}.png`;
        document.getElementById('dice-2').src = `./img/dice-${dice2}.png`;

        if(dice1 != 1 && dice2 != 1) {
            // Cộng dồn điểm qua các lần lắc
        } else {
            // Đổi người chơi
        }
    }
})

let gamePlaying
let roundScore
let activePlayer

function init() {
    gamePlaying = true;
    roundScore = 0;
    activePlayer = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

window.onload = init();