const password = document.getElementById('password');
const btn = document.getElementById('btn-show-password');

const username = document.getElementById('username');
const age = document.getElementById('age');
const btnSubmit = document.getElementById('btn-submit')

btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (password.type == 'password') {
        password.type = 'text';
        btn.innerText = 'Hide';
    } else {
        password.type = 'password'
        btn.innerText = 'Show'
    }
});

const users = [
  {
    username: "nguyenvana",
    password: "123",
  },
  {
    username: "nguyenvanb",
    password: "456",
  },
  {
    username: "nguyenvanc",
    password: "789",
  },
];

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();

    let usernameValue = username.value;
    let passwordValue = password.value;
    let age = age.value;

    if (usernameValue == '' || passwordValue == '') {
        alert('Cannot leave blank');
        return;
    }

    // Kiểm tra giá trị



    let isvalid = false; 
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === usernameValue
            && users[i].password === passwordValue
        ) {
            isvalid = true;
            break;
        }
    }

    if (isvalid) {
        alert('login successfully');
    } else {
        alert("username or password incorrect")
    }
    // Tìm kiếm username, password mà người dùng vừa nhập, so sánh với các giá trị trong mảng users
    // Nếu tìm đúng thì hiển thị "đăng nhập thành công"
    // Ngược lại, hiển thị "username hoặc password không chính xác"
});

function checkValidate(userValue, passValue, ageValue) {
    let isvalid = true;
    if (!userValue) {
        setError(username, 'Cannot let username blank');
    } else {
        setSuccess(username)
    }

    if (!passValue) {
        setError(password, 'Cannot let password blank');
    } else {
        setSuccess(password)
    }

if (!ageValue) {
    setError(age, 'Cannot let age blank');
    // ! = truong hop phu dinh
} else if (!number(ageValue)) {
    setError(age, 'Incorrect format')
} else {
    setSuccess(age)
    }
}

function setError(ele, mess) {
    // Border red
    ele.classList.add('error')
    // message appear
    let span = ele.parentElement.querySelector('span')
    span.innerText = mess;
}

function setSuccess(ele) {

}
// So sansh xem ứng với trường hợp nào, nếu trúng thì đăng nhập thành công, sai thì ghi khoogn chính xác
