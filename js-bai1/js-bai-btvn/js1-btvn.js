// 1. Tính chu vi hình tròn với bán kính r1
let r1 = 10;
console.log(2 * Math.PI * r1)

//2. Tính diện tích hình tròn với bán kính r2
function dienTich(r1) {
    let rBinh = r1 ** 2;
    return (Math.PI)*rBinh
}
console.log(dienTich(10))

// Đổi từ cm sang m
let cm = 10;
console.log(cm / 100)

// Đổi từ phút sang giờ
let second = 60;
console.log(second / 60)

// Trả về nghiệm của phương trình bậc nhất
function ctBacNhat(a = 0, b = 0, c = 0) {
    let x = (c - b) / a
    return x
}
let ptBacNhat = ctBacNhat(1, 2, 4);
console.log(ptBacNhat)

// Đổi từ độ C sang độ F
function celcius(c) {
    let trongNgoac = c * 9 / 5;
    return trongNgoac + 32
}
console.log(celcius(0))

// Chỉ số BMI của một người theo cân nặng (kg); chiều cao (m)
function weight_height(w, h) {
    let BMI = w / (h ** 2)
    return BMI
}
console.log(weight_height(49, 1.58))

// Random một số trong khoảng min-max (min, max là 2 số nguyên dương tùy ý)
function khoang(min, max) {
    let random = Math.random(khoang) * (max - min) + min;
    return Math.floor(random) ;
}
console.log(khoang(4,10))
