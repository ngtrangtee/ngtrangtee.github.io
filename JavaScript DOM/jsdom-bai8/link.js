const gameContainerEl = document.getElementById('game-container');
const loginContainerEl = document.getElementById('login-container');
const forgotContainerEl = document.getElementById('forgot-container');

const btnLinkLoginFromGame = document.querySelector('.btn-login');
const btnLinkForgot = document.querySelector('.btn-link-forgot-password');
const btnLinkLoginFromForgot = document.querySelector('.btn-link-login');

const btnLogin = document.querySelector('#btn-login')
const inputUsername = document.querySelector('#login-username')
const inputPassword = document.querySelector('#login-password')

const inputUsernameForgot = document.querySelector('.input-group input')
const btnSend = document.querySelector('.input-group-append button')

const btnRegister = document.querySelector('#btn-register')
const inputRegisterUsername = document.querySelector('#register-username')
const inputRegisterPassword = document.querySelector('#register-password')
const inputRegisterConfirmPassword = document.querySelector('#register-confirm-password')
const inputRegisterAvatar = document.querySelector('#register-avatar')

// Chuyển từ màn chơi game => login
btnLinkLoginFromGame.addEventListener('click', function () {
    gameContainerEl.style.display = 'none';
    loginContainerEl.style.display = 'flex';
});

// Chuyển từ màn login => forgot
btnLinkForgot.addEventListener('click', function () {
    loginContainerEl.style.display = 'none';
    forgotContainerEl.style.display = 'flex';
});

// Chuyển từ màn forgot => login
btnLinkLoginFromForgot.addEventListener('click', function () {
    loginContainerEl.style.display = 'flex';
    forgotContainerEl.style.display = 'none';
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
]

// truy cập vào nút login
// Lắng nghe sự kiện 
// Lấy dữ liệu của 2 ô input, gán vào 2 biến 
// Nếu
// duyệt qua mảng user, nếu nó bằng vói user trong mock up thì return true
// Khi mới vào trang, lấy thông tin user ra, lưu vào một biến global user để dùng vào các chỗ khá

btnLogin.addEventListener('click', function () {
    let usernameValue = inputUsername.value
    let passwordValue = inputPassword.value
    let dataLocal = localStorage.getItem("users");
      if (JSON.parse(dataLocal)) {
        users = JSON.parse(dataLocal);
      } else {
        users = [];
      }

    console.log(users)
    let isValid = false
    if (usernameValue == "" || passwordValue == "") {
        alert("Cannot leave username or password blank")
        return
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == usernameValue && users[i].password == passwordValue) {
                isValid = true;
                // Lưu data vào
                localStorage.setItem('user', JSON.stringify(users[i]))
                break
            }
        } if (isValid) {
            alert("Login Successfully")
            loginContainerEl.style.display = 'none'
            gameContainerEl.style.display = 'block'
        } else {
            alert("username or password is incorrect")
        }
    }

})

// Khi hết thời gian thì lưu thông tin của user vào mảng ranking

// Quên mật khaaur
    // truy cập vào nút gửi, lắng nghe sự kiện 
    // Nếu tìm được username giống, hiển thị password ra
btnSend.addEventListener('click', function () {
    let usernameForgotValue = inputUsernameForgot.value

    let isValid = false
    let userForgot
    for (let i = 0; i < users.length; i++) {
        if (usernameForgotValue === users[i].username) {
            isValid = true;
            userForgot = users[i]
            break
        }
    }  
    if (isValid) {
        alert(`Your password is ${userForgot.password}`)
    } else {
        alert("No username found")
    }
    
})

// Tạo tài khoản mới
    // Truy cập vào nút đăng kí, lắng nghe sự kiện
    // Lấy dữ liệu của ô mật khẩu và tên đăng nhập
    // Nếu dữ liệu trống -> Thông báo
    // Nếu có dữ liệu 
    // -> So sánh dữ liệu với local storage
    // Nếu có thì thông báo trùng
    // Nếu không có thì Push dữ liệu vừa lấy vào storage 

btnRegister.addEventListener('click', function () {
    let registerUsernameValue = inputRegisterUsername.value
    let registerPasswordValue = inputRegisterPassword.value
    let registerConfirmPasswordValue = inputRegisterConfirmPassword.value
    let registerAvatarValue = inputRegisterAvatar.value

    let isValid = false;
    if (registerUsernameValue == '' || registerPasswordValue == '') {
        alert('Cannot leave Username and/or Password blank')
        return
    } else if (registerPasswordValue !== registerConfirmPasswordValue) {
        alert('Password and Confirm Password are not the same')
        registerPasswordValue = "";
        registerConfirmPasswordValue = "";
        return
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == registerUsernameValue) {
                isValid = true;
                break
            }
        } if (isValid) {
            alert('Username already existed')
        } else {
            let newUser = {
                    username: registerUsernameValue,
                    password: registerPasswordValue,
                    avatar: registerAvatarValue,
                };
            users.push(newUser)
            console.log(users)
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

})


    