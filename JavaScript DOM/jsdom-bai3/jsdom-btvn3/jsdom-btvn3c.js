//1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let li8 = document.createElement("li");
li8.innerText = "Item 8";
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
const li1 = document.querySelector("li:nth-child(1)");
console.log(li1);
li1.style.color = "red";

//3. Sửa background cho thẻ <li> thứ 3 thành màu xanh (background-color)
const li3 = document.querySelector("li:nth-child(3)");
li3.style.backgroundColor = "green";

//4. Remove thẻ <li> thứ 4
const li4 = document.querySelector("li:nth-child(4)");
const ul = document.querySelector("ul");
ul.removeChild(li4);

//5. Thêm thẻ <li> mới thay thế cho thẻ <li> thứ 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let liNew = document.createElement("li");
liNew.innerText = "New Item";

const li5 = document.querySelector("li:nth-child(4)");
ul.insertBefore(liNew, li5);

//6. Thêm 1 button "add" và 1 ô input để nhập text ở đằng sau ul
let buttonAdd = document.createElement("button");
buttonAdd.innerText = "add";
document.body.appendChild(buttonAdd);

let input = document.createElement("input");
document.body.appendChild(input);

// 6b. Mỗi khi bấm nút vào nút "add" thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách ul
buttonAdd.addEventListener('click', function () {
    let liInput = document.createElement("li");
    liInput.innerText = input.value;
    ul.appendChild(liInput)
})

// 7. Thêm 1 nút "remove". Chức năng để xóa thẻ <li> cuối cùng của danh sách ul
let buttonRemove = document.createElement("button");
buttonRemove.innerText = "remove";
document.body.appendChild(buttonRemove);

let allLi = document.getElementsByTagName("li")
console.log(allLi)
buttonRemove.addEventListener('click', function () {
    ul.removeChild(allLi[allLi.length - 1]);
});

// 8. Thêm 1 nút "Hide" trên đầu của danh sách <ul>. 
// Khi bấm vào "Hide" thì <ul> sẽ ẩn. Đồng thời label của nút "Hide" => "Show"
// Và ngược lại Khi bấm vào "Show" thì <ul> sẽ hiện. Đồng thời label của nút "Show" => "Hide"
let showHideButton = document.createElement("button");
showHideButton.innerText = "hide";
document.body.prepend(showHideButton)
function showHideUl() {
    if (ul.show.display == "block") {

    }
}
showHideButton.addEventListener('click', function () {
    ul.classList.toggle('hide');
    if (ul.classList.contains('hide')) {
        showHideButton.innerText = "Show";
    } else {
        showHideButton.innerText = "Hide";
    }
})
