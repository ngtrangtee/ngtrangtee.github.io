// Truy cập vào các thành phần
const wordsEl = document.querySelector("#words");
const inputWordEl = document.querySelector("#input-word");
const timeEl = document.querySelector("#time");
const btnReload = document.querySelector(".btn-reload");
const languageEl = document.querySelector("#chose-language");

const wordsCorrectEl = document.querySelector('.words-correct')
const wordsWrongEl = document.querySelector('.words-danger')
const wordsAccuracyEl = document.querySelector('.words-accuracy')
const wpmEl = document.querySelector(".wpm-count");
const characterCorrectEl = document.querySelector(".character-correct-count");
const characterWrongEl = document.querySelector('.character-wrong-count')
const characterCountEl = document.querySelector(".character-count");

const tableEl = document.querySelector("tbody")

// Đặt biến global cho loginUser
let loginUser = []

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
let interval; //xét đếm ngược
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

		// B2 - chèn vào khi hết thời gian
		insertInfoPlayerToRanking()
	}
}

// Khai báo biến global
let wpmRanking = 0

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
	wpmRanking = totalWrongWords + totalCorrectWords
	wpmEl.innerText = Math.floor(((totalWrongCharacters + totalCorrectCharacters) / 5) / (10 / 60)) + " WPM"
	wordsAccuracyEl.innerText = ((totalCorrectWords / (totalCorrectWords + totalWrongWords) * 100).toFixed(2)) + '%';
	wordsCorrectEl.innerText = totalCorrectWords
	wordsWrongEl.innerText = totalWrongWords
	characterCorrectEl.innerText = totalCorrectCharacters
	characterWrongEl.innerText = totalWrongCharacters;
	characterCountEl.innerText = totalCorrectCharacters + totalWrongCharacters
}


// Lấy nội dung của thẻ span 
// tính độ dài của thẻ span 
// Khởi tạo, vừa vào trang sẽ gọi function này ra luôn
function init() {
	// 
	inputUsername.value = '';
	inputPassword.value = '',
	inputRegisterUsername.value = '';
	inputRegisterPassword.value = '',
	inputRegisterAvatar.value = '';
	// Lấy thông tin user từ trong login ra
	getDataFromLocalStorage()

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

// Function lấy thông tin user từ phần login 
	// Khi mới vào trang, lấy thông tin user ra, lưu vào một biến global user để dùng vào các chỗ khác
function getDataFromLocalStorage() {
	let dataLocal = localStorage.getItem('user');
	if (JSON.parse(dataLocal)) {
		loginUser = JSON.parse(dataLocal)
	} else {
		loginUser = []
	}
	console.log(loginUser)

}

// Mock up mảng rank
let ranking = [
	{
		avatar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmhhJTIwdHJhbmclMjBiZWFjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
		username: "Nguyen Van A",
		wpm: 10,
		time: formatDate(new Date (2021,03,27,11,26,30)), //tháng tính từ 0 đến 11
	},
	{
		avatar: "https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/fotolia-92027264european-day-forest-green-forest.jpg?itok=biCWJPQQ",
		username: "Tran Van B",
		wpm: 500,
		time: formatDate(new Date (2021,03,26,16,35,00)),
	},
	{
		avatar: "https://ychef.files.bbci.co.uk/624x351/p0973lkk.jpg",
		username: "Phan Thi C",
		wpm: 151,
		time: formatDate(new Date (2028,03,27,16,33,00)),
	},
]

// render ranking
	// trước khi hiển thị, phải sắp xếp theo thứ tự giảm dần
	// truy cập vào tbody
	// làm trống nội dung
	// vòng lặp qua mảng mock up qua cấu trúc tr
function renderRanking(arr) {
	let arrSort = arr.sort(function (a, b) {
		return b.wpm - a.wpm;
	});

	tableEl.innerHTML = "";

	for (let i = 0; i < arrSort.length; i++) {
	tableEl.innerHTML += `
		<tr>
			<td>${i+1}</td>
			<td>
				<img src=${arrSort[i].avatar}
					alt="">
			</td>
			<td>${arrSort[i].username}</td>
			<td class="font-weight-bold">${arrSort[i].wpm}</td>
			<td class="font-italic">${arrSort[i].time}</td>
		</tr>
    `
	}
}

// Function format Date
function formatDate(date){
	let year = date.getFullYear();
	let month = `0${date.getMonth()+1}`.slice(-2);
	let day = `0${date.getDate()}`.slice(-2);

	let hour = `0${date.getHours()}`.slice(-2);
	let minute = `0${date.getMinutes()}`.slice(-2);
	let second = `0${date.getSeconds()}`.slice(-2);

	return `${hour}:${minute}:${second} - ${day}/${month}/${year}`
}

function insertInfoPlayerToRanking() {
	let record = {
		avatar: loginUser.avatar,
		username: loginUser.username,
		wpm: wpmRanking,
		time: formatDate(new Date()), //tháng tính từ 0 đến 11
	}

	// Thêm người mới vào mảng ranking đã tạo > render
	ranking.push(record);
	renderRanking(ranking);

}

	// Gọi function, truyền vào mảng mock up
renderRanking(ranking)

// Run CSS, HTML, then call init rightout
window.onload = init;





// -------------------------------------------//-------------------------------------------//-----------
// LINK.JS//
const gameContainerEl = document.getElementById("game-container");
const loginContainerEl = document.getElementById("login-container");
const forgotContainerEl = document.getElementById("forgot-container");

const btnLinkLoginFromGame = document.querySelector(".btn-login");
const btnLinkForgot = document.querySelector(".btn-link-forgot-password");
const btnLinkLoginFromForgot = document.querySelector(".btn-link-login");

const btnLogin = document.querySelector("#btn-login");
const inputUsername = document.querySelector("#login-username");
const inputPassword = document.querySelector("#login-password");

const inputUsernameForgot = document.querySelector(".input-group input");
const btnSend = document.querySelector(".input-group-append button");

const btnRegister = document.querySelector("#btn-register");
const inputRegisterUsername = document.querySelector("#register-username");
const inputRegisterPassword = document.querySelector("#register-password");
const inputRegisterConfirmPassword = document.querySelector(
  "#register-confirm-password"
);
const inputRegisterAvatar = document.querySelector("#register-avatar");

// Chuyển từ màn chơi game => login
btnLinkLoginFromGame.addEventListener("click", function () {
  gameContainerEl.style.display = "none";
  loginContainerEl.style.display = "flex";
});

// Chuyển từ màn login => forgot
btnLinkForgot.addEventListener("click", function () {
  loginContainerEl.style.display = "none";
  forgotContainerEl.style.display = "flex";
});

// Chuyển từ màn forgot => login
btnLinkLoginFromForgot.addEventListener("click", function () {
  loginContainerEl.style.display = "flex";
  forgotContainerEl.style.display = "none";
});

// mock up một danh sách user để so sánh
let users = [
  // {
  //     username: 'user1',
  //     password: '11111',
  //     avatar: "https://i.pinimg.com/236x/4f/e1/d0/4fe1d0c4ee72ad6152789d6e2c84e4fc.jpg"
  // },
  // {
  //     username: 'user2',
  //     password: '22222',
  //     avatar: "https://www.clipartkey.com/mpngs/m/52-524202_class-dojo-monsters-avatar-clipart-png-download-class.png"
  // },
  // {
  //     username: 'user3',
  //     password: '33333',
  //     avatar: "https://www.jing.fm/clipimg/detail/82-827636_28-collection-of-class-dojo-avatar-clipart-class.png"
  // }
];

// truy cập vào nút login
// Lắng nghe sự kiện
// Lấy dữ liệu của 2 ô input, gán vào 2 biến
// Nếu
// duyệt qua mảng user, nếu nó bằng vói user trong mock up thì return true
// Khi mới vào trang, lấy thông tin user ra, lưu vào một biến global user để dùng vào các chỗ khá

btnLogin.addEventListener("click", function () {
  let usernameValue = inputUsername.value;
  let passwordValue = inputPassword.value;
  let dataLocal = localStorage.getItem("users");
  if (JSON.parse(dataLocal)) {
    users = JSON.parse(dataLocal);
  } else {
    users = [];
  }

  console.log(users);
  let isValid = false;
  if (usernameValue == "" || passwordValue == "") {
    alert("Cannot leave username or password blank");
    return;
  } else {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == usernameValue &&
        users[i].password == passwordValue
      ) {
        isValid = true;
        // Lưu data vào
        localStorage.setItem("user", JSON.stringify(users[i]));
        break;
      }
    }
    if (isValid) {
      alert("Login Successfully");
      loginContainerEl.style.display = "none";
		gameContainerEl.style.display = "block";
		init();
    } else {
      alert("username or password is incorrect");
    }
  }
});

// Khi hết thời gian thì lưu thông tin của user vào mảng ranking

// Quên mật khaaur
// truy cập vào nút gửi, lắng nghe sự kiện
// Nếu tìm được username giống, hiển thị password ra
btnSend.addEventListener("click", function () {
  let usernameForgotValue = inputUsernameForgot.value;

  let isValid = false;
  let userForgot;
  for (let i = 0; i < users.length; i++) {
    if (usernameForgotValue === users[i].username) {
      isValid = true;
      userForgot = users[i];
      break;
    }
  }
  if (isValid) {
    alert(`Your password is ${userForgot.password}`);
  } else {
    alert("No username found");
  }
});

// Tạo tài khoản mới
// Truy cập vào nút đăng kí, lắng nghe sự kiện
// Lấy dữ liệu của ô mật khẩu và tên đăng nhập
// Nếu dữ liệu trống -> Thông báo
// Nếu có dữ liệu
// -> So sánh dữ liệu với local storage
// Nếu có thì thông báo trùng
// Nếu không có thì Push dữ liệu vừa lấy vào storage

btnRegister.addEventListener("click", function () {
  let registerUsernameValue = inputRegisterUsername.value;
  let registerPasswordValue = inputRegisterPassword.value;
  let registerConfirmPasswordValue = inputRegisterConfirmPassword.value;
  let registerAvatarValue = inputRegisterAvatar.value;

  let isValid = false;
  if (registerUsernameValue == "" || registerPasswordValue == "") {
    alert("Cannot leave Username and/or Password blank");
    return;
  } else if (registerPasswordValue !== registerConfirmPasswordValue) {
    alert("Password and Confirm Password are not the same");
    registerPasswordValue = "";
    registerConfirmPasswordValue = "";
    return;
  } else {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == registerUsernameValue) {
        isValid = true;
        break;
      }
    }
    if (isValid) {
      alert("Username already existed");
    } else {
      let newUser = {
        username: registerUsernameValue,
        password: registerPasswordValue,
        avatar: registerAvatarValue,
      };
      users.push(newUser);
      console.log(users);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
});


    

