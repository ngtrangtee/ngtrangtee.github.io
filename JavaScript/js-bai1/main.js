console.log("Xin Chào");

// Khai báo variable
// let + tên biến
let name
name = 'Nguyễn Thảo Trang';
console.log(name)

name = 'Không biết';
console.log(name)

// Có thể gắn loại giá trị khác vào cùng tag mà không làm sao 
name = '10'
console.log(name);

let email = 'abcd@gmail.com';
console.log(email)

// Dùng const không đổi được giá trị của biến
// Thường những hằng số người ta thường lưu ở file riêng
const NUMBER = 20;
console.log(NUMBER)

// Function scope
function abc() {
    // không có từ khóa eg: let, thì sẽ thành biến global
    age = 24
    console.log(age)
}

abc();
console.log(age)

// blockscope 
{
    let num = 100;
    console.log(num)
}

// Kiểm tra loại biến
let symbol = '#';
console.log(typeof symbol)

let crazy;
console.log(typeof crazy)

// Đặt tên cho string
let city = 'Hôm nay trời mưa "đẹp" quá';
let wink = 'Trời \'nắng\' to';

// Chuỗi quá dài muốn xuống dòng
let xuongDong = 'Hà nội' +
    'mưa to' +
    'có dông';

let firstName = 'Nguyễn';
let lastName = 'Trang';
let fullName = firstName + ' ' + lastName;
console.log(fullName)

// sử dụng back-tick
// $ chỉ dùng được bên trong backtick thôi
let text1 = `Muốn khỏe đẹp thì hãy tập
thể thao`
console.log(text1)

let text2 = `Xin chào, tên tôi là ${fullName}. Năm nay tôi sinh năm ${2021 - 2001} tuổi`
console.log(text2)

// Number
let num1 = 20;
let num2 = 6;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Math
console.log(Math.PI) // Pi
console.log(Math.sqrt(num1)) // Can bac 2
// Tính số mũ có 2 cách
console.log(Math.pow(num1, num2)) // 20 ^ 6
console.log(num1 ** num2) // 20^6
// Min,max
console.log(Math.max(1, 2, 3, 4, 5)) // Lấy số lớn nhất
console.log(Math.min(1,4,6,7)) //Lấy số lớn nhất
// 3 Quy tắc làm tròn
// Làm tròn theo cách thông thường
console.log(Math.round(2.5))
console.log(Math.round(2.6))
console.log(Math.round(2.3))
// làm tròn xuống
console.log(Math.floor(2.5))
console.log(Math.floor(2.6))
console.log(Math.floor(2.1))
// làm tròn lên
console.log(Math.ceil(2.6))
console.log(Math.ceil(2.5))
console.log(Math.ceil(2.1))

// Lấy số ngẫu nhiên từ 0 đến 1
Math.random()
// Số ngẫu nhiên từ 1 đến 10
Math.floor(Math.random() * 10)


// FUNCTION
// Định nghĩa funtion không có tham số
function sayHello() {
    console.log('Hello')
}
// Thực thi function 
sayHello()

// Định nghĩa function có tham số parameter
function sayHello1(name, birth) {
    console.log(`Xin chào ${name},  Năm nay ${2021 - birth} tuổi`)
}
// Thực thi function
sayHello1('Nguyễn Thảo Trang', 2001)

// Function trả về giá trị
// VD: tính tổng 2 số
function sum(a = 8, b = 5) {
    let result = a + b
    return result
}
// hoặc
// function sum(a, b) {
//     return a + b
// }

let data = sum(3, 4); //a=3,b=4
console.log(data) 
console.log(sum(4, 10)) //a=4,b=10
// truyền thiếu 
console.log(sum(5)) //a=5
console.log(sum()) //1=0, b=0

// BÀI TẬP THỰC HÀNH
// 1) In ra Xin chào các bạn
console.log('Xin chào các bạn')
// 2) In ra xin chào X (X là một chuỗi bất kì, nhập vào tham số khi gọi hàm)
function hello1(hello1) {
    console.log(`Xin chào ${hello1}`)
}
hello1('Trang')
// 3) In ra dòng chữ: Xin chào "X" (X là một chuỗi...)
function hello2(hello2) {
    console.log(`Xin chào ${hello2}`)
}
hello2(`"Trang"`)

// 4) Tính tổng 2 số a,b bất kì
function sum(a = 0, b = 0) {
    let sumab = a + b
    return sumab
}
let sumab1 = sum(1, 2);
console.log(sumab1)

// 5) Tính bình phương 1 số bất kì
function binhPhuong(a = 2, b = 2) {
    let ketQua5 = Math.pow(a, b)
    return ketQua5
} '
 

console.log(binhPhuong(3,2))

// 6)Tính thế kỉ của 1 năm bất kì (1 năm là số nguyên dương)
function chia100(a) {
    let ketQua6 = a/100 ;
    return Math.ceil(ketQua6)
}
console.log(chia100(2001))


