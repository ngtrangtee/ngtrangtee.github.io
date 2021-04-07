// Vonfg lawpj fore
console.log
for (let i = 1; i <= 5; i++) {
    console.log(1)
}

// vòng lặp while
// ban đầu j = 1; kiểm tra j <=5
//  1 < 5 thì sẽ in ra 
// tăng j lên 1 đơn vị = 2 
// kiểm tra tiếp, đúng thì in ra
// đế 6 bị sai sẽ ko in nữa

let j = 1;
while (j <= 5) {
// Nếu điều kiện đúng > thực hiện code trong while
    console.log(j);
    j++
}

// do while - thực hiện ít nhất một lần rồi mới kiểm tra điều kiện
// biến chạy
let k = 1
do {
    console.log(k);
    k++
} while (k <= 5);

// let num;
// if (num > 0) {
//     console.log('Số dương');
//     if (num % 2 == 0) {
//         console.log('Số chẵn');
//     } else {
//         console.log('Số lẻ');
//     } 
// } else if (num == 0) {
//         console.log('Số 0');
//     } else {
//         console.log('Số âm')
//     }
// 

//  đề bài toán tử 3 ngôi (condition ? (Đúng) : (sai))

let num = 20;
if (num >= 0) {
    console.log('Số Dương');
} else {
    console.log('Số âm')
}

// đáp án ^
// if-else lồng nhau thì không nên convert
num >= 0 ? console.log('Số dương') : console.log('Số âm')

