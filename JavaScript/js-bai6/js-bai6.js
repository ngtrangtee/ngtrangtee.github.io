// Object
// Lưu trữ các thuộc tính
let emptyUser = {};
let user = {
    name: 'Nguyễn Văn A',
    email: 'abc@gmail.com',
    age: 25,
    year : 1995,
    isStatus: true,
    speak: function (name) {
        console.log('Xin chào ' + name)
    },
    
    getYear : function() {
        return 2021 - user.year;
    },

    getYear1 : function() {
        return 2021 - this.year;
    }

    // This: đối tượng đang thực thi; refer đến đối tượng
}
console.log(user)

// Lấy ra giá trị của một cái key (name, email, age)
// Cách 1
console.log(user.name)
console.log(user.email)
console.log(user.age)
user.speak('Tê');
console.log(user.getYear())
console.log(user.getYear1())

// Cách 2
console.log(user['name'])

// Thay đổi giá trị
user.name = 'Trần Văn B';
console.log(user)

// Thêm key-value
user.weight = 60;
console.log(user)

// Xóa key-value
delete user.weight;
console.log(user)

// Khai báo function
    // Cách 1; This không gắn với cgi >> Window
function sum(a, b) {
    console.log(this);
    return a + b
}
console.log(sum(1, 2));

    // cách 2
let sum_01 = function (a, b) {
    return a + b;
};
console.log(sum(3, 4));

    // Cách 3: Arrow function
let sum_02 = (a, b) => {
    return a + b;
};
console.log(sum_02(3,4))

// hoặc nếu chỉ có một dòng 
let sum_02a = (a, b) => a + b;
console.log(sum_02a(5, 6));

// map, filter: Duyệt qua phần tử của mảng, rồi làm một thao tác mới, trả về mảng mới, không ảnh hưởng đến mảng ban đầu
let numbers = [1, 2, 3, 4];
let newNumbers = numbers.map((ele) => ele * 2)
console.log(newNumbers);
// Viết tắt index và return

// filter: Lọc giá trị; trả về một mảng mới gồm giá trị đã lọc 
let filterNumber = numbers.filter(value => value > 2);
console.log(filterNumber)

// find: Trả về giá trị đầu tiên nó tìm thấy nếu số đó lớn hơn 2
let findNumber = numbers.find((value) => value > 2);

// findIndex: Trả về chỉ số đầu tiên nó tìm thấy nếu số đó lớn hơn 2
let findIndexNumber = numbers.findIndex((value) => value > 2);

// some: Tìm các phần tử theo điều kiện. Nếu chỉ 1 phần tử thỏa mãn --> true; nếu tất cả không thỏa mãn --> Falase
console.log(numbers.some(value => value > 3));
console.log(numbers.some(value => value > 3));
//  Bài tập luyện tập 
let grades = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johnny", grade: 2, sex: "M" },
    { name: "Ethan", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Donald", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
];

// 1. Tìm thứ hạng trung bình của cả lớp 
function classAverage(arr) {
    let classTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        classTotal = classTotal + arr[i].grade;
    } return classTotal / arr.length
}
console.log(classAverage(grades))

// 2. Tìm thứ hạng trung bình của nam trong lớp 
function maleAverage(arr) {
    let count = 0;
    let maleTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex == "M") {
            count = count + 1;
            maleTotal = maleTotal + arr[i].grade;
        }
    } return maleTotal / count;
}
console.log(maleAverage(grades))

// 3. Tìm thứ hạng trung bình của Nữ trong lớp
function femaleAverage(arr) {
    let count = 0;
    let maleTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex == "F") {
            count = count + 1;
            maleTotal = maleTotal + arr[i].grade;
        }
    } return maleTotal / count;
}
console.log(femaleAverage(grades))

// Tìm thứ hạng cao nhất của nam trong lớp

// Tìm thứ hạng cao nhất của nữ trong lớp

// Tìm thứ hạng thấp nhất của nam trong lớp
function maleLowest(arr) {
  let maleMin = arr[0].grade;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].sex == "M" && arr[i].grade > maleMin) {
      maleMin = arr[i].grade;
    }
  }
  return maleMin;
}
console.log(maleLowest(grades));

// Tìm thứ hạng thấp nhất của nữ trong lớp
    
    
