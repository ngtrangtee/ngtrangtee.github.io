// Event
    // Cách 1: HTML-attribute
function sayHello() {
    console.log('Hello');
}
    // Cách 2
let btn_01 = document.querySelector('#btn_01');
// btn_01.onclick = function () {
//     console.log('Hello_01')
// }
function sayHello_01() {
    console.log('Hello_01')
}
btn_01.onclick = sayHello_01

    // Cách 3:EventListener
let btn_02 = document.querySelector('#btn_02');
btn_02.addEventListener('click', function() {
    console.log('Hello_02')
}
)

    // Làm đoạn p ẩn/hiện với 2 nút
let para1 = document.querySelector('#umbala');
let hide = document.querySelector('#hide')
let show = document.querySelector('#show')
hide.addEventListener('click', function () {
    para1.style.display = "none";
    } )

show.addEventListener("click", function () {
  para1.style.display = "block";
});

    // Làm đoạn p ẩn/hiện với 1 nút
let para2 = document.getElementById("hello");
let showHideButton = document.getElementById("show-hide");
    // Kiểm tra trạng thái
function showHidePara2() {
    if (para2.show.display == "block") {

    }
}

        // Dùng Class
showHideButton.addEventListener('click', function () {
    para2.classList.toggle('hide');
    if (para2.classList.contains('hide')) {
        showHideButton.innerText = 'Hiện';
    } else {
        showHideButton.innerText = 'Ẩn'
    }
})


      let button = document.createElement("button");
      button.innerText = "Add";

      let input = document.createElement("input");
      document.body.appendChild(button);
      document.body.appendChild(input);

      button.addEventListener("click", function () {
        let addLi = document.createElement("li");
        addLi.innerText = input.value;
        ul.appendChild(addLi);
      });

      let remove = document.createElement("button");
      remove.innerText = "Remove";
      document.body.appendChild(remove);

      let allLi = document.getElementsByTagName("li");

      remove.addEventListener("click", function () {
        ul.removeChild(allLi[allLi.length - 1]);
      });
      let hide = document.createElement("button");
      hide.innerText = "Hide";
      document.body.prepend(hide);



