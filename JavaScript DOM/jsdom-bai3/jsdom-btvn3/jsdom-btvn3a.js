const button = document.querySelector("#btn");
const points = document.querySelector(".points")

let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
for (let i = 0; i < colors.length; i++) {
    const box = document.createElement("div")
    box.classList.add("box");
    box.style.background = colors[i];
    document.querySelector(".wrap").appendChild(box);
}

const allBoxes = document.querySelectorAll(".box");
points.innerText = allBoxes.length;

allBoxes.forEach((e) => {
    e.addEventListener("click", function () {
        e.classList.remove("box");
        const allBoxes = document.querySelectorAll(".box");
        points.innerText = allBoxes.length;
    });
});

btn.addEventListener("click", function () {
    for (let i = 0; i < colors.length; i++) {
        // Add box
        let box1 = document.createElement("div");
        box1.classList.add("box");
        box1.style.background = colors[i];
        document.querySelector(".wrap").appendChild(box1);
        // Change number
        const allBoxes = document.querySelectorAll(".box");
        points.innerText = allBoxes.length;
    }
})
    
