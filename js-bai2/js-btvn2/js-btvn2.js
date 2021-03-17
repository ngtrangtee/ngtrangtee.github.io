// 1. Viết function nhập vào số month và year bất kỳ. Trả về số ngày của tháng đó (sử dụng switch/case)
function date(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(`Tháng ${month} có 31 ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`Tháng ${month} Năm ${year} có 30 ngày`);
      break;
    case 2:
      if (year % 400 == 0) {
        console.log(`Tháng ${month} có 29 ngày`);
          } else if (year % 4 == 0 && year % 100 != 0) {
        console.log(`Tháng ${month} có 28 ngày`);
      }
      break;
  }
}

date(2, 1040);

// 2. Viết function sử dụng vòng lặp từ 1 đến 100, chia 3,5
function number(a) {
    for (let a = 1; a <= 100; a = a + 1) {
        if (a % 3 == 0) {
            console.log('Fizz');
        } else if (a % 5 == 0) {
            console.log('Buzz');
        } else if (a % 5 == 0 && a % 3 == 0) {
            console.log('FizzBuzz');
        } else {
            console.log(`${a}`)
            }
        }
}
number(0);

// 3. Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính hình cầu
function theTichHinhCau(r) {
    return (4 / 3) * Math.PI * (r ** 3);
}
console.log(theTichHinhCau(10));

// 4. Tính tổng các số nguyên nằm giữa 2 số nguyên 
function integer(a, b) {
    let sum = 0;
    for (let i = a + 1; i < b - 1; i = i + 1) {
        sum = sum + i;
    }
    return sum;
}
console.log(integer(10, 15))

// 5. Check xem có phải số nguyên tố không
function prime(n) {
    if (n < 2) {
        return false;
    } else if (Number.isInteger(n)){
        for (i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    return true;
    } else {
        return false;
    }
}
console.log(prime(2.5))

// 6. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số nguyên dương truyền vào
function tongNguyenTo(x) {
    let tong = 0;
    for (let i = 2; i <= x; i = i + 1) {
        if (prime(i)) {
            tong = tong + i;
        }
    }
    return tong;
}
console.log(tongNguyenTo(10));
    
// 7. Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các ước số của số đó.
function uocSo(z) {
    let tong1 = 0;
    for (i = 1; i <= z; i = i + 1) {
        if (z % i == 0) {
            tong1 = tong1 + i;
        }
    }
    return tong1;
}
console.log(uocSo(15));
