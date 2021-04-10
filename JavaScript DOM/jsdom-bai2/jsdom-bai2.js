// Thao tác với classList
const para = document.querySelector('p')
console.log(para.classList);

    // Thêm 2 class - cho phần tử p
para.classList.add("text-big", "text-uppercase")

    // Xóa class: remove
para.classList.remove("text-big", "text-uppercase")

    // Kiểm tra một class có tồn tại hay không, trả về true/false
console.log(para.classList.contains('text-red'));
console.log(para.classList.contains('text-uppercase'));

    // Toggle
    // Sau 1 khoảng thời gian nhất định sẽ thực hiện lại một lần
setInterval(function () {
    para.classList.toggle("text-big")
}, 3000) // Cứ 3s thì sẽ thực hiện function

    // Đếm ngược thời gian từ 10
let time = 10;
let interval = setInterval(function () {
    time-- //time=time-1
    let timeSelector = document.getElementById("time");
    timeSelector.innerText = `${time}s`;
    if (time == 0) {
        clearInterval(interval)
    }

    if (time < 6) {
        timeSelector.classList.add("text-red")
    }
}, 1000)

// Sự kiện 
    // HTML-Attribute

