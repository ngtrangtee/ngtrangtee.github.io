// Khai báo mảng
let numbers = [2, 4, 6, 8];
console.log(numbers);

// Mảng không có phần tử - mảng rỗng
let emptyArr = [];
console.log(emptyArr);

// Lấy giá trị trong mảng thông qua chỉ số
// giá trị độ dài là bao nhiêu
console.log(numbers.length);
// lấy vị trí số mấy
console.log(numbers[2]);
console.log(numbers[3]);
// Lấy phần tử cuối cùng
console.log(numbers[numbers.length - 1]);

// Phương thức để sửa, thêm, xóa các phần tử trong mảng
// SỬA - Set lại giá trị bằng cách truy cập vào chỉ số VD: đổi 6 thành số 7
numbers[2] = 7;
console.log(numbers);
// // lấy chỉ số là 7 thì không có, nó sẽ tạo ra một cái rỗng
// numbers[7] = 10;
// console.log(numbers);
// // cũng không có chỉ số 4 nên không in ra được
// console.log(numbers[4]);

// THÊM + XÓA
// Thêm vào cuối mảng: push
numbers.push(10);
console.log(numbers);
// Xóa ở cuối mảng: pop()
numbers.pop();
console.log(numbers);
// Thêm vào đầu mảng: unshift
numbers.unshift(0);
console.log(numbers);
// Xóa ở đầu mảng: shift
numbers.shift();
console.log(numbers);
// Chỉ xóa ở vị trí có tham số: splice
// (vị trí chỉ số bắt đầu muốn xóa, số lượng phần tử muốn xóa kế tiếp)
numbers.splice(1, 2);
console.log(numbers);
// Chỉ thêm ở vị trí có tham số: splice
// (vị trí số bắt đầu muốn thêm, số lượng muốn xóa, giá trị muốn thêm 1, giá trị muốn thêm 2)
numbers.splice(1, 0, 4, 7);
console.log(numbers);
// Vừa thêm vừa xóa ở vị trí có tham số
// Xóa 4, thay vào 5 và 6
numbers.splice(1, 2, 5, 6);
console.log(numbers);

// Nối các mảng array với nhau
numbers = numbers.concat([9, 10], [11, 12, 13]);
console.log(numbers);

// Đảo ngược các phần tử trong mảng
numbers.reverse();
console.log(numbers);

// Sắp xếp các giá trị trong mảng từ bé đến lớn
// Nó sẽ xếp các phần tử bắt đầu bằng 1 rồi mới xét tiếp vì nó được convert
numbers.sort();
console.log(numbers);
// cách sửa đối với loại số
// a-b tăng dần
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
// b-a giảm dần
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

// lặp qua mảng 
// in ra giá trị từ giá trị mảng thông qua chỉ số
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Tính tổng 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);

// Tính tổng các số chẵn
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sum1 = sum1 + numbers[i];
    }
}
console.log(sum1);

// Tạo một mảng mới chỉ gồm các giá trị chẵn
// Tạo mảng rỗng 
// Tạo vòng lặp tìm phần tử chẵn
// thêm phần tử vừa tìm được vào mảng rỗng
let arr = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    arr.push(numbers[i]);
  }
}
console.log(arr);

// so sánh
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
// Không bằng nhau vì mỗi array được lưu ở một địa chỉ bộ nhớ khác nhau
console.log(arr1 == arr2);

let num1 = 1;
let num2 = 2;
console.log(num1 == num2);

let arr3 = [1, 3, 2, 4];
let arr4 = arr3.sort(function (a, b) {
    return a - b;
})
console.log(arr3 == arr4);

// So sánh số 2 và chuỗi 2
// So sánh về mặt giá trị, tự động convert về cùng loại
console.log(2 == '2');
// so sánh về mặt giá trị và kiểu dữ liệu
console.log(2 === '2');

let foo;
{
    let foo = 123;
}
console.log(foo);


function f() {
    return { a: 1 }
}
const result = f()