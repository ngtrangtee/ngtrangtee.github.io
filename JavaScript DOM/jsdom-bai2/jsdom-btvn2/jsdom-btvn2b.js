const cong = document.querySelector(".btn.counterBtn.nextBtn");
const tru = document.querySelector(".btn.counterBtn.prevBtn");

const numberSelector = document.getElementById("counter")

let value = 0;
cong.addEventListener("click", function () {
    value++;
    numberSelector.innerText = value;
    if (value < 0) {
        numberSelector.style.color = "red";
    } else if (value > 0) {
        numberSelector.style.color = "green"
    } else {
        numberSelector.style.color = '#333333';
    }
});
tru.addEventListener("click", function () {
    value--;
    numberSelector.innerText = value;
    if (value < 0) {
        numberSelector.style.color = "red";
    } else if (value > 0) {
        numberSelector.style.color = "green"
    } else {
        numberSelector.style.color = '#333333';
    }
}) 

// CHữa bài tập về nhà
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector(".nextBtn");
const counter = docuemnt.querySelector('#counter')
let number = 0;

    // Xử lí nút trừ
prevBtn.addEventListener('click', function () {
    number-- //number=number -1
})
    //Xử lí nút cộng  
nextBtn.addEventListener('click', function () {
    number++  
})

function update() {
    counter.innerText = number;
    if (number > 0) {
        counter.style.color = 'green'
    } if (number == 0) {
        counter.style.color = '#33333';
    } else {
        counter.style.color = 'red';
    }
}