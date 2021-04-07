// 1. Tính chu vi hình tròn với bán kính r1
function chuVi(r1) {
    return 2 * Math.PI * r1
}
console.log(chuVi(10))

//2. Tính diện tích hình tròn với bán kính r2
function dienTich(r2) {
    return (Math.PI) * (r2 ** 2)
}
console.log(dienTich(10))

// Đổi từ cm sang m
function cmSangm(c) {
    return c / 100
}
console.log(cmSangm(1000))

// Đổi từ phút sang giờ
function phutSangGio(p) {
    return p / 60
}
console.log (phutSangGio(60))

// Trả về nghiệm của phương trình bậc nhất
function ctBacNhat(a = 0, b = 0, c = 0) {
    return (c - b) / a
}
let ptBacNhat = ctBacNhat(1, 2, 4);
console.log(ptBacNhat)

// Đổi từ độ C sang độ F
function celcius(c) {
    return (c * 9 / 5) + 32
}
console.log(celcius(0))

// Chỉ số BMI của một người theo cân nặng (kg); chiều cao (m)
function weight_height(w, h) {
    return w / (h ** 2)
}
console.log(weight_height(49, 1.58))

// Random một số trong khoảng min-max (min, max là 2 số nguyên dương tùy ý)
function khoang(min, max) {
    let random = Math.random() * (max - min) + min;
    return Math.floor(random) ;
}
console.log(khoang(4,10))
