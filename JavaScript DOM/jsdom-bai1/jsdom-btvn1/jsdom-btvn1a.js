// Bài 1: Tạo 1 thẻ p có id="text", có nội dung bất kỳ. Yêu cầu
//- Đặt màu văn bản thành #777
const text = document.getElementById("text");
text.style.color = '#777';
//- Đặt kích thước phông chữ thành 2rem

text.style.fontSize = '2rem'
//- Đặt nội dung HTML thành "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
text.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';

// Bài 2
function blueList() {
    list = document.querySelectorAll("li") 
    for (let i = 0; i < list.length; i++) {
        list[i].style.color = 'blue';
    }
}
console.log(blueList());




