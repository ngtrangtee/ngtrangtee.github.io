//1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let li8 = document.createElement('li');
li8.innerText = 'Item 8';
console.log(li8);

let li9 = document.createElement("li");
li9.innerText = "Item 9";
console.log(li9);

let li10 = document.createElement("li");
li10.innerText = "Item 10";
console.log(li10);

document.getElementById("list").appendChild(li8);
document.getElementById("list").appendChild(li9);
document.getElementById("list").appendChild(li10);

//2. Sửa nội dung cho thẻ <li> thứ 1 thành màu đỏ (color)
const li1 = document.querySelector('li:nth-child(1)')
console.log(li1)
li1.style.color = 'red';

//3. Sửa background cho thẻ <li> thứ 3 thành màu xanh (background-color)
const li3 = document.querySelector('li:nth-child(3)');
li3.style.backgroundColor = 'green';

//4. Remove thẻ <li> thứ 4
const li4 = document.querySelector('li:nth-child(4)');
const ul = document.querySelector('ul')
ul.removeChild(li4);

//5. Thêm thẻ <li> mới thay thế cho thẻ <li> thứ 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let liNew = document.createElement('li');
liNew.innerText = 'New Item'

const li5 = document.querySelector('li:nth-child(4)')
ul.insertBefore(liNew, li5)

//6. Thêm 1 button "add" và 1 ô input để nhập text ở đằng sau ul
let button = document.createElement('button');
button.innerText = 'add';
document.body.appendChild(button)

let input = document.createElement('input');
document.body.appendChild(input);
