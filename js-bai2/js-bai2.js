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
function diem2(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b)
  }
}
diem2(18, 1);

// Bài 3 Kiểm tra số đó dương, âm, hay là 0
function diem3(a) {
  if (a < 0) {
    console.log("Số âm");
  } else if (a > 0) {
    console.log("Số Dương");
  } else {
    console.log("Bằng 0");
  }
}
diem3(0);

// Bài 4: Kiểm tra số đó chẵn hay lẻ
function diem4(b) {
  if (b % 2 == 0) {
    console.log("Số chẵn");
  } else {
    console.log("Số lẻ");
  }
}
diem4(10);

// Bài 5: Kiểm tra số chia hết cho 3 & 5
function diem5(c) {
  if (c % 3 == 0 && c % 5 == 0) {
    console.log("Chia hết cho 3 và 5");
  } else {
    console.log("Không chia hết cho 3 và 5");
  }
}
diem5(10);

// Bài 6: Kiểm tra c có bằng a+b không
function diem6(x, y, z) {
  if (z == x + y) {
    console.log("c có bằng a + b");
  } else {
    console.log("c không bằng a+b");
  }
}
diem6(1, 1, 10);
