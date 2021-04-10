// Lấy ra nội dung
const heading = document.getElementById('heading');
console.log(heading.innerHTML)
console.log(heading.innerText);
console.log(heading.textContent);
 
const box = document.querySelector('.box');
    // Trả tất cả về thẻ
console.log(box.innerHTML);
    // innerText: Trả nội dung; không lấy được nội dung thẻ ẩn (có thuộc tính display:none)
console.log(box.innerText);
    // textContent: Trả nội dung, giữ định dạng về mặt khoảng cách
console.log(box.textContent);

// Thay đổi nội dung - thực hiện theo thứ tự từ trên xuống dưới
heading.innerHTML = 'Hello rainbow'
heading.innerHTML = '<span style = "color: coral">Xin Chào</span> các bạn'
    // Thẻ innerText và textContent không truyền được thẻ mà chỉ thay đổi được nội dung
heading.textContent = 'Hello'
    // Thay đổi thẻ li 3 số 2
const ul = document.querySelector("body > ul")
const li3 = ul.querySelector(":nth-child(3)");
li3.innerHTML = 'hobo';

// Tạo phần tử
let para = document.createElement('p') // <p>...</p>
para.innerText = 'New Para'
console.log(para)

let para2 = document.createElement("p"); // <p>...</p>
para2.innerText = "New Para 2";
console.log(para2);

// Thêm phần tử (chỉ chèn được 1 vị trí)
    // thêm vào đầu phần tử cha (chỉ duy nhât ùng được cho body)
document.body.prepend(para)
    // Thêm vào cuối phần tử cha
document.body.appendChild(para2);
    // Thêm vào giữa (cha, phần tử đứng sau chỗ muốn chèn) - chèn thẻ p trước thẻ box
document.body.insertBefore(para, box);
    // VD: Tạo thẻ li có nội dung là New Li, chèn vào giữa thẻ li 3 & 4
let newLi = document.createElement('li');
newLi.innerText = 'New Li';
const box1 = document.querySelector('.box > ul')
const li4 = box1.querySelector(':nth-child(2)')
box1.insertBefore(newLi, li4);

// Xóa
const para3 = document.querySelector('.para');
document.body.removeChild(para3);
// Xóa li 1 thứ 2
const li1 = ul.querySelector(':nth-child(1)')
ul.removeChild(li1)

// Thay thế
// Thay thế thẻ p thành thẻ button 
let button = document.createElement('button');
button.innerText = 'Click'
let para4 = document.querySelector('body > p:nth-child(3)')
document.body.replaceChild(button, para4) //(element để thay thế, vị trí thay thế)
// VD: Tạo thẻ input, thay cho "New Para" vừa tạo bên trên
let input = document.createElement('input');
document.body.replaceChild(input, para)

// Sao chép li 2.2, rồi thêm vào cuối cùng của ul2
const li22 = ul.querySelector(':nth-child(1)');
const endOfUl2 = ul.querySelector(':last-child')
let li22Copy = li22.cloneNode(true);
ul.appendChild(li22Copy);

// Thay color thành đỏ, background thành đen cho heading
heading.style.backgroundColor = 'coral'
heading.style.color = 'blue'

// Random color
// Mỗi lần refresh trang ra 1 màu mới
function randomRgbCode() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
console.log(randomRgbCode());
document.body.style.backgroundColor = randomRgbCode();
