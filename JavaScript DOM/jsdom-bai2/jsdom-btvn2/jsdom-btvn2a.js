// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")
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


// Chữa bài
let content = para.innerText
function highlightWord(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 8) {
            arr[i] = `<span style = "background-color: yellow">${arr[i]}</span>`
        }
    }
    return arr.join(" ")
}
para.innerHTML = highlightWord(content)

// Bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p
let linkFacebook = document.createElement("a")
linkFacebook.textContent = 'Facebook'
linkFacebook.href = "https://www.facebook.com/";
linkFacebook.style.disp
document.body.appendChild(linkFacebook);

    // Chữa bài 2
// Tạo thẻ
// Chèn nội dung cho thẻ
// Gắn vào sau thẻ p
let link1 = document.createElement('a');
link1.href = "https://www.facebook.com/";
link1.innerText = 'Facebook1';
// Chuyển sang tab mới
link1.target = '_blank';
document.body.appendChild(link1)


// Bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
let div = document.createElement('div')

function wordCount() {
    return para.innerText.split(" ").length;
}
console.log(wordCount());
div.innerText = wordCount()
document.body.appendChild(div);

    // Chữa bài 3
let wordCount1 = content.split(" ").length;
div.innerText = `${wordCount1} words`;
document.body.insertBefore(div, para)

// // // Bài 4: thay thế ký hiệu ? => 🤔 và ! => 😲
    // nên dùng inner.HTML
    //replaceap 
para.innerHTML = para.innerHTML.replaceAll("?", " 🤔");
para.innerHTML = para.innerHTML.replaceAll("!", " 😲                                                      ");
    // biểu thức chính quy
para.innerHTML = para.innerHTML.replace(/\?/g, "🤔");
para.innerHTML = para.innerHTML.replace(/\!/g, "😲")
// let contentReplaceQuestion = para.innerText.replaceAll("?", " 🤔");
// contentReplaceQuestion = para.innerText.replaceAll("!", " 😲");
// para.innerText = contentReplaceQuestion;

para.innerHTML = para.innerHTML.split("").map(char => {
    if (char == "?") {
        char = "🤔";
    } else if (char == "!") {
        char = "😲";
    }
    return char;
}).join("")
