// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")
// Lấy nội dung, convert thành mảng
// Duyệt qua mảng đó (các từ), nếu từ nào có length >= 8 thì 
// bọc các từ >=8 vào thẻ span
// chuyển background
const para = document.querySelector("p");
let split = para.innerHTML.split(" ");
function highlight() {
    let highlightedWords = "";
    let result = "";
    for (let i = 0; i < split.length; i++) {
        if (split[i].length >= 8) {
            highlightedWords = `<span class="yellow">${split[i]}</span>`;
        console.log(highlightedWords)
        } else {
            highlightedWords = split[i];
        }
        result = result + " " + highlightedWords;
    }
    return result;
}
para.innerHTML = highlight();

// Bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p
let linkFacebook = document.createElement("a")
linkFacebook.textContent = 'Facebook'
linkFacebook.href = "https://www.facebook.com/";
linkFacebook.style.disp
document.body.appendChild(linkFacebook);

// Bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

const link = document.querySelectorAll('a');
let div = document.createElement('div')

function wordCount() {
    return para.innerText.split(" ").length;
}
console.log(wordCount());
div.innerText = wordCount()
document.body.appendChild(div);

// // Bài 4: thay thế ký hiệu ? => 🤔 và ! => 😲
let contentReplaceQuestion = para.innerText.replaceAll("?", " 🤔");
contentReplaceQuestion = para.innerText.replaceAll("!", " 😲");
para.innerText = contentReplaceQuestion;

