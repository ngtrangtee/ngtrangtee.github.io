// Truy cập thông qua ID (hay dùng)
const heading = document.getElementById('heading')
console.log(heading)

// Truy cập thông qua tab name (p,div,ul)
// Lúc nào cũng trả về danh sách (không phải array)
const paras = document.getElementsByTagName('p')
console.log(paras)
console.log(paras.length)
console.log(paras[0]);

// Truy cập thông qua class 
const parasClassName = document.getElementsByClassName('para')
console.log(parasClassName);

// Query selector, trả về phần tử đầu tiên tm thấy (hay dùng)
    // Lấy thẻ para 2
const paraSelector = document.querySelector('.para')
console.log(paraSelector)
    // Lấy thẻ para 3
const paraSelector2 = document.querySelector(".para ~ .para");
console.log(paraSelector2);

const paraSelector3 = document.querySelector("p:nth-child(4)");
console.log(paraSelector3);

    // Lấy thẻ li 1.1
const ul = document.querySelector("body > ul");
console.log(ul);

    // Truy cập cục bộ - Tìm kiếm 1 cái ul đầu tiên nằm trong box
const box = document.querySelector('.box')
const ul_box = box.querySelector('ul')
console.log(ul_box)

// Query all selector
    // Lấy tất cả thẻ p
const parasSelectorAll = document.querySelectorAll('p')
console.log(parasSelectorAll)

// Mối quan hệ giữa các phần tử
    // Lấy cha
const boxParent = box.parentNode
console.log(boxParent);

    // Lấy con 
const boxChild = box.childNodes;
console.log(boxChild);

console.log(box.children);

    // Anh em đứng trước
console.log(box.previousElementSibling);

    // Anh em đứng sau
console.log(box.nextElementSibling);

// Get/set