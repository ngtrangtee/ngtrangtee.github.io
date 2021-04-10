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

