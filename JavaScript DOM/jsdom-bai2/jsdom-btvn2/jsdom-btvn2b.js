const cong = document.querySelector(".btn.counterBtn.nextBtn");
const tru = document.querySelector(".btn.counterBtn.prevBtn");

const numberSelector = document.getElementById("counter")

let value = 0;
cong.addEventListener("click", function () {
    value++;
    numberSelector.innerText = value;
});
tru.addEventListener("click", function () {
    value--;
    numberSelector.innerText = value;
}) 

