// - Part-2 : Set up các thuộc tính ban đầu cho game
//     - Tạo function **init**, trong function thực hiện các công việc sau:
  //     - Đổi tên người chơi thành: Player 1, Player 2
  //     - Reset các điểm số về 0 (điểm lượt chơi + điểm tích lũy của 2 người chơi)
  //     - Ẩn ảnh 2 con xúc xắc
  //     - Xóa hết class active của cả 2 người chơi đi khi vừa vào, nếu ai chơi trước thì mình chơi vào
  //     - Xác định người chơi được chơi trước :  add class "active" cho người chơi đó
//     - Gọi function **init** = sự kiện "onload"

// định nghĩa xem người chơi nào đang được chơi (0-player 1 || 1-player2)
let activePlayer
function init() {

  activePlayer = 0; //cho người chơi 1 chơi trước

  // Reset tên 
  document.querySelector('#name-0').innerText = 'Player 1'
  document.querySelector('#name-1').innerText = 'Player 2'

  // Reset điểm
  document.querySelector('#score-0').innerText = 0;
  document.querySelector('#score-1').innerText = 0;

  document.querySelector('#current-0').innerText = 0;
  document.querySelector('#current-1').innerText = 0;
  
  // Ẩn xúc xắc
  document.querySelector('#dice-1').style.display = 'none'
  document.querySelector('#dice-2').style.display = 'none'

  // Xóa hết class active và winner
  document.querySelector('.player-0-panel').classList.remove('active','winner')
  document.querySelector('.player-1-panel').classList.remove('active','winner')

  // Thêm class active cho active player
  document.querySelector(`.player-${activePlayer}-panel`).classList.add('active')
}

window.onload = init()