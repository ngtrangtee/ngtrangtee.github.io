// 1. Một tính năng mới vào gói Pro: '24/7 Phone support' (Thêm thẻ li vào cuối danh sách ul trong gói Pro)
let liPro = document.createElement("li")
liPro.innerText = "24/7 Phone support";
const ulPro = document.querySelector(".list-unstyled.mt-3.mb-4")
// console.log(ulPro)
ulPro.appendChild(liPro)

// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro) (Đảo ngược vị trí)
// Copy Proplan
let planParent = document.querySelector(".row.justify-content-center");
console.log(planParent)
let proPlan = document.querySelector(".col-md-4");
console.log(proPlan)
let basicPlan = document.querySelector(".col-md-4:nth-child(2)")
console.log(basicPlan)
let proPlanCopy = proPlan.cloneNode(true);

// Thay thế proPlanCopy cho basicPlan
planParent.replaceChild(proPlanCopy, basicPlan);
// Thay thế basicPlan cho proPlan
planParent.replaceChild(basicPlan, proPlan)

// 3. Trong gói Pro hãy cập nhật nút 'Get Started' hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và thay đổi nội dung thành 'Buy Now'
let buttonPro = proPlanCopy.querySelector(".btn.btn-lg.btn-block.btn-outline-primary");
console.log(buttonPro)
buttonPro.innerText = "Buy Now"
buttonPro.classList.add("buy-now")

// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50% (dung lượng lưu trữ nằm trong class "storage-amount")
let pro = proPlanCopy.querySelector(".storage-amount");
proAmount = pro.innerText;
function add25Percent(pro) {
    return pro = pro * 125/100;
}
pro.innerHTML = add25Percent(proAmount)

let basic = document.querySelector(".storage-amount");
basicAmount = basic.innerText;
function add50Percent(basic) {
  return basic = basic * 3/2;
}
basic.innerHTML = add50Percent(basicAmount);