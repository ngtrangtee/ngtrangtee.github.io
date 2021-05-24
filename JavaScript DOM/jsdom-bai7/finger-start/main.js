// Truy cập vào các thành phần
const wordsEl = document.querySelector("#words");
const inputWordEl = document.querySelector("#input-word");
const timeEl = document.querySelector("#time");
const btnReload = document.querySelector(".btn-reload");
const languageEl = document.querySelector("#chose-language");

const wordsCorrectEl = document.querySelector('.words-correct')
const wordsWrongEl = document.querySelector('.words-danger')
const wordsAccuracyEl = document.querySelector('.words-accuracy')
const wpsEl = document.querySelector(".wps-count");
const characterCorrectEl = document.querySelector(".character-correct-count");
const characterWrongEl = document.querySelector('.character-wrong-count')
const characterCountEl = document.querySelector(".character-count");

// Khai báo biến
let string_vietnamese =
  "Tôi trả tiền làm tượng nhưng cũng không hài lòng Anh Tú Thứ năm Chủ khu du lịch An sapa Sa Pa Lào Cai nghĩ cộng đồng mạng nên có cái nhìn chính xác hơn về sự cố liên quan đến tượng Nữ thần Tự do vừa qua Chia sẻ với Zing ông Nguyễn Ngọc Đông chủ khu An sapa thừa nhận rất mệt mỏi trong những ngày qua khi trở thành nạn nhân của cộng đồng mạng";

let string_english =
  "This shows us that the global nature needs our lives in the planet It involved all of us even if in many ways different and unequivocal And in this way it teaches us even more on what we have to do to create a just planet fair and safe from an environmental point of view In brief the Covid pandemic has taught us this interdependence this sharing together";

let language = {
  1: string_vietnamese,
  2: string_english,
};

let time;
let words;
let interval; //xeét đếm ngược
let index; //Thứ tự của từ trong mảng; dựa vào đây để highlight lên
let isPlaying; //khi gõ, mặc định là false, khi gõ là true

languageEl.addEventListener("change", function () {
  init();
});

btnReload.addEventListener("click", function () {
  init();
});

function randomWords(arr) {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
}

// Render từ
function renderWords(arr) {
  // Render thời gian
  // xóa nội dung bảng
  wordsEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const w = arr[i];
    wordsEl.innerHTML += `<span>${w}</span>`;
  }
}

// Convert thời gian từ giây sang phút và giây
function convertTime(num) {
  let minute = `0${Math.floor(num / 60)}`.slice(-2); //Nếu có số nhỏ hơn 10 thì có số 0 đằng trước; thay vì phải kiểm tra lớn
  let second = `0${num % 60}`.slice(-2);
  return `${minute}:${second}`; // trả về chuỗi
}

// Truy cập vào spans
function highlightWord(index) {
  let spans = document.querySelectorAll("#words span");
  //xóa hết các phần đã highlight đi
  // Array.from(spans).map(span => span.classList.remove ('highlight')) //convert span sang mảng; muốn dùng Map thì phải đổi sang mảng mới dùng được; duyệt qua các phần tử của span và làm gì đó với các phần tử mà không thay đổi độ dài của mảng
  for (let i = 0; i < spans.length; i++) {
    spans[i].classList.remove("highlight");
  }
  spans[index].classList.add("highlight"); //lấy phần tử có chỉ số alf index và highlight vào
}

// Khi ấn dấu cách thì chuyển sang từ tiếp theo
inputWordEl.addEventListener("keyup", function (e) {
  if (!isPlaying) {
    interval = setInterval(countdownTime, 1000);
    isPlaying = true;
  }
  // Kiểm tra tại thời điểm gõ
  checkCurrentWord(e.target.value.trim(), words[index]); //tham số 1 = ô input, tham số 2- từ của mình

  // Chuyển sang từ tiếp theo
  if (e.keyCode == 32) {
    compareWord(e.target.value.trim(), words[index]); // Kiểm tra tại thời điểm next
    index++; // Tăng lại index lên 1, Chuyển sang từ tiếp theo
    highlightWord(index); //chuyển sang từ tiếp theo
    e.target.value = ""; //hoặc this.value = '' hoặc inputWordEl.value = ''
  }
});

function checkCurrentWord(inputValue, word) {
  let spans = document.querySelectorAll("#words span");

  if (!word.startsWith(inputValue)) {
    spans[index].classList.add("highlight-wrong");
  } else {
    spans[index].classList.remove("highlight-wrong");
  }
}

function compareWord(inputValue, word) {
  let spans = document.querySelectorAll("#words span");
  Array.from(spans).map((span) => span.classList.remove("highlight-wrong"));

  if (!word.startsWith(inputValue)) {
    spans[index].classList.add("wrong");
  } else if (word.startsWith(inputValue) && inputValue.length < word.length) {
    spans[index].classList.add("wrong");
  } else {
    spans[index].classList.add("correct");
  }
}

function countdownTime() {
  time--;
  timeEl.innerText = convertTime(time);

  if (time == 0) {
    clearInterval(interval);
    inputWordEl.disabled = true;
      inputWordEl.value = "";
      
      UpdateInfoPlayer();
  }
}

function UpdateInfoPlayer() {
    let spans = document.querySelectorAll('#words span')
    let totalCorrectWords = 0
    let totalWrongWords = 0
    
    let totalCorrectCharacters = 0;
    let totalWrongCharacters = 0;

    for (let i = 0; i < spans.length; i++) {//Duyệt qua mảng span
        if (spans[i].classList.contains('correct')) {
            totalCorrectWords++
            totalCorrectCharacters += spans[i].innerText.length; 
        }
        if (spans[i].classList.contains("wrong")) {
            totalWrongWords++;
            totalWrongCharacters += spans[i].innerText.length;
        }

    }
    wpsEl.innerText = (totalWrongWords + totalCorrectWords) + ' WPS'
    wordsAccuracyEl.innerText = ((totalCorrectWords / (totalCorrectWords + totalWrongWords) * 100).toFixed(2)) + '%';
    wordsCorrectEl.innerText = totalCorrectWords
    wordsWrongEl.innerText = totalWrongWords
    characterCorrectEl.innerText = totalCorrectCharacters
    characterWrongEl.innerText = totalWrongCharacters;
    characterCountEl.innerText = totalCorrectCharacters + totalWrongCharacters

    
    
}

// Lấy nội dung của thẻ span 
// tính độ dài của thẻ span 
// 

// Khởi tạo, vừa vào trang sẽ gọi function này ra luôn
function init() {
  time = 10;
  index = 0; //truyền thẻ span có index = 0 - mặc định
  // Chọn ngôn ngữ
    isPlaying = false;
    inputWordEl.disabled = false;
  // Lấy ra giá trị 1 và 2
  // Mỗi lần chọn ngon ngữ mới sẽ thay dỏi intit một làần
  // Dựa vào giá trị 1 và 2, tạo ra objet

  if (interval) {
    clearInterval(interval); //khi đổi ngôn ngữ, load lại trang
  }
  inputWordEl.value = "";

  // Chuyển sang ngôn ngữ
  let languageValue = languageEl.value;
  words = language[languageValue].toLowerCase().split(" ");

  // Đổi vị trí các từ
  words = randomWords(words);

  // Gọi function renderWords
  renderWords(words);

  // Hiển thị thời gian
  timeEl.innerText = convertTime(time);

  // Hiển thị highlight
  highlightWord(index);
}

// Run CSS, HTML, then call init rightout
window.onload = init;
