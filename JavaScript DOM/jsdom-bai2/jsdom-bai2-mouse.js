// document.addEventListener('mousedown', function () {
//     console.log('mousedown')
// })

// document.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });

// document.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });

document.addEventListener('click', function () {
    console.log('click')
});


// Tạo hình tròn mỗi khi click
let container = document.querySelector(".container");
let left = 0;
let intervalCircle
let MAX = 500; //Viết hoa vì là hằng số
container.addEventListener("click", function (event) {
  // Xóa tất hình tròn
  let boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    container.removeChild(boxes[i]);
  }

    // Tạo ra hình tròn
  let box = document.createElement("div");
  box.classList.add("box");
        // xét vị trí tọa độ
  box.style.top = `${event.offsetY - 50}px`;
  box.style.left = `${event.offsetX - 50}px`;

    container.appendChild(box);
    // Lưu lại vị trí chiều ngang
    left = event.offsetX - 50
});

const getCircleButton = document.querySelector('#button')
getCircleButton.addEventListener('click', function () {
    let box = document.querySelector('.box');
    if (!box) {
        alert('không có hình tròn nào')
        return;
    }

    // Lấy vị trí hiện tại hình tròn
    console.log(left);
    let limit = left + MAX;
    
    // Set interval
    interval = setInterval(function () {
        left = left + 2
        box.style.left = `${left}px`
        if (left > limit) {
            clearInterval(interval);
        }
    }, 1000 / 60);
});


// Di chuyển với hàm set interval
    // Công việc: update vị trí theo chiều x

