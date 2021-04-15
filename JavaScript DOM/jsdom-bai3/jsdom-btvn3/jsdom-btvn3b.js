// Random các số trong ô từ 0 đến 100
function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let input1 = randomPosition(0, 100);
let input2 = randomPosition(0, 100);
document.getElementById("blank1").value = input1;
document.getElementById("blank2").value = input2;
 
answer = input1 + input2;

// Kiểm tra kết quả và kiện hộp Alert
const checkAnswer = () => {
    let userAnswer = document.getElementById("blank3").value
    if (answer == userAnswer) {
        alert("Correct!!")
    } else {
        alert("Wrong :(");
    }

// Random phép tính mới
    document.getElementById("blank3").value = "";

    let input1 = randomPosition(0, 100);
    let input2 = randomPosition(0, 100);
    document.getElementById("blank1").value = input1;
    document.getElementById("blank2").value = input2;

    answer = input1 + input2;
}
