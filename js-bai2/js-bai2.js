// Boolean
let a = true;
let b = false;
let c = !a;
let d = !b;

console.log(a, b, c, d);

// Xác định giá trị của biến hay biểu thức
let number = 10;
console.log(Boolean(number));

console.log(Boolean(6 > 10));
console.log(Boolean(6 < 10));

// Kiểm tra falsy value
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Toán tử &&, toán tử ||
// Toán tử và &&
console.log("Toán tử và &&");
console.log(Boolean(true && true));
console.log(Boolean(true && false));
console.log(Boolean(false && true));
console.log(Boolean(false && false));

// Toán tử hoặc ||
console.log("Toán tử hoặc ||");
console.log(Boolean(true || true));
console.log(Boolean(true || false));
console.log(Boolean(false || true));
console.log(Boolean(false || false));

// câu lệnh If - đúng thì sẽ in ra, không thì không in ra
let hour = 6;
if (hour < 10 || hour > 5) {
  console.log("Make Breakfast!");
}

//Câu lệnh else-if
let hour1 = 14;
if (hour1 < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Afternoon");
}

//Câu lệnh if-else if-else
let hour2 = 23;
if (hour2 < 12) {
  console.log("Good Morning");
} else if (hour2 >= 12 && hour2 < 18) {
  console.log("Good Afternoon");
} else if (hour2 > 18 && hour2 < 22) {
  console.log("Good evening");
} else {
  console.log("Good night");
}

// BÀI TẬP LUYỆN TẬP
// Bài 1 in điểm A B C D
function diem(mark) {
  if (mark >= 85) {
    console.log("A");
  } else if (mark >= 70 && mark < 85) {
    console.log("B");
  } else if (mark >= 40 && mark < 70) {
    console.log("C");
  } else {
    console.log("D");
  }
}
diem(40);

// Bài 2 In số lớn hơn
function soSanh(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b)
  }
}
soSanh(18, 1);

// Bài 3 Kiểm tra số đó dương, âm, hay là 0
function amDuong(a) {
  if (a < 0) {
    console.log("Số âm");
  } else if (a > 0) {
    console.log("Số Dương");
  } else {
    console.log("Bằng 0");
  }
}
amDuong(0);

// Bài 4: Kiểm tra số đó chẵn hay lẻ
function chanLe(b) {
  if (b % 2 == 0) {
    console.log("Số chẵn");
  } else {
    console.log("Số lẻ");
  }
}
chanLe(10);

// Bài 5: Kiểm tra số chia hết cho 3 & 5
function chia3Va5(c) {
  if (c % 3 == 0 && c % 5 == 0) {
    console.log("Chia hết cho 3 và 5");
  } else {
    console.log("Không chia hết cho 3 và 5");
  }
}
chia3Va5(10);

// Bài 6: Kiểm tra c có bằng a+b không
function kiemTra(x, y, z) {
  if (z == x + y) {
    console.log("c có bằng a + b");
  } else {
    console.log("c không bằng a+b");
  }
}
kiemTra(1, 1, 10);

// Câu lệnh Switch-case
let money = 100000
switch (money) {
    case 12000:
        console.log('Cafe1');
        break;
    case 10000:
        console.log('Cafe2');
        break;
    case 8000:
        console.log('Cafe 3');
        break;
    default:
        console.log('Không có đồ uống nào phù hợp');
        break;
}

// Gộp các case có cùng chức năng với nhau
let num2 = 10
switch (num2) {
    case 2:
    case 4:
    case 6:
    case 8:
        console.log('Số chẵn');
        break;
    case 1:
    case 3:
    case 5:
    case 9:
        console.log('Số lẻ');
        break;
    default:
        console.log('Số không hợp lệ')
        break;
}

// Bài 1.1 Dùng switch case để xem hôm nay là thứ mấy
let day = 0;
switch (day) {
    case 0:
        console.log("Hôm nay là Chủ Nhật");
        break;
    case 1:
        console.log("Hôm nay là Thứ Hai");
        break;
    case 2:
        console.log("Hôm nay là Thứ Ba");
        break;
    case 3:
        console.log("Hôm nay là Thứ Tư");
        break;
    case 4:
        console.log("Hôm nay là Thứ Năm");
        break;
    case 5:
        console.log("Hôm nay là Thứ Sáu");
        break;
    case 6:
        console.log("Hôm nay là Thứ Bảy");
        break;
    default:
        console.log("Không biết thứ mấy");
        break;
}

// Bài 2.1 Dùng switch case để xem mùa nào là tháng mấy
let month = 6;
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Mùa Xuân");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Mùa Hạ")
        break;
    case 7:
    case 8:
    case 9:
        console.log("Mùa Thu")
        break;
    case 10:
    case 11:
    case 12:
        console.log("Mùa Đông");
        break;
    default:
        console.log("Không phải mùa trong năm");
        break;   
}
    
// LOOP
// Vòng lặp For
// VD: Mình sẽ dậy lúc 7h trong vòng 30 ngày
// let i là ngày, 30 ngày, hết 1 ngày thì lặp lại
for (let i = 1; i <= 30; i = i + 1) {
    console.log(`Ngày ${i} thức dậy lúc 7h`);
}
// let i là ngày, 30 ngày, chỉ ngày chẵn
for (let i = 1; i <= 30; i = i + 2) {
    console.log(`Ngày ${i} thức dậy lúc 7h`)
}
// Break - Ngày thứ 20 bị ốm nặng nên phải kết thúc việc này
for (let i = 1; i <= 30; i = i + 1) {
    if (i == 20) {
        console.log(`Ngày ${i} bị ốm, không thể tiếp tục`);
        break;
    }
    console.log(`Ngày ${i} thức dậy lúc 7h`)
}
// Continue - chỉ thực hiện trong ngày chẵn
for (let i = 1; i <= 30; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(`Ngày ${i} thức dậy lúc 7h`)
}

// Tính tổng tiền tiết kiệm
// Tiết kiệm tiền trong vòng 10 ngày. Mỗi ngày 100k. Sau 10 ngày sẽ được 1 triệu
let totalMoney = 0 //Khi bắt đầu, số tiền tiết kiệm bằng 0
for (let i = 1; i <= 10; i = i + 1) {
    //Tổng số tiền hiện tại = trước đó + 100k
    totalMoney = totalMoney + 100000;
}
console.log(totalMoney)
// Ngày thứ 5 trở đi tiết kiệm được 200k một ngày
for (let i = 1; i <= 10; i = i + 1) {
    if (i >= 5) {
        totalMoney = totalMoney + 200000;
    } else {
        totalMoney = totalMoney + 100000;
    }
}
console.log(totalMoney)


// BÀI TẬP VÒNG LẶP 
// 1.2 Tính tổng các số lẻ từ 1 đến 100
let total = 0
for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2 == 1) {
        total = total + i
    }
}
console.log(total)

// 2.2 Tính tổng các số chia hết cho 3 và 5 trong khoảng từ 0 đến 100
total1 = 0
for (let i = 0; i <= 100; i = i + 1) {
    if (i % 3 == 0 && i % 5 == 0) {
        total1 = total1 + i
    }
}
console.log(total1);

//  2.3 Chạy vòng lăp từ 0 đến 20; in số chẵn lẻ trong khoảng đó
for (let i = 0; i <= 20; i = i + 1) {
    if (i % 2 == 0) {
        console.log(`${i} là số chẵn`)
    } else {
        console.log(`${i} là số lẻ`)
    }
}