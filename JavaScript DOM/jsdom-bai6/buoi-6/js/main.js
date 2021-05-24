let todos = [
//   {
//     id: randomId(),
//     title: "Coding homework",
//     status: false,
//   },
//   {
//     id: randomId(),
//     title: "Edit Podcast",
//     status: false,
//   },
//   {
//     id: randomId(),
//     title: "Business Analytics Individual Quiz",
//     status: true,
//   },
];

const todoListEl = document.querySelector(".todo-list");
const todoInputEl = document.querySelector("#todo-input");
const btnAdd = document.querySelector("#btn-add");
const btnUpdate = document.querySelector("#btn-update")
const btnDelete = document.querySelector("#btn-delete-all")

const inputs = document.querySelectorAll(".todo-option-item input");

function getValueOption() {
  for (i = 0; inputs.length; i++) {
    if (inputs[i].checked == true) {
      return Number(inputs[i].value); //convert ra số
    }
  }
}

// Hiển thị lên trên giao diện
function renderToDo(arr) {
  // Làm rỗng array
    let newArr;
    let valueOption = getValueOption();
      switch (valueOption) {
        case 1: //lấy tất cả cv
          newArr = [...arr]; //... là clone ra một mảng mới, khoogn ảnh huo
          break;

        case 2: //Lấy cx hoàn thanh
          newArr = arr.filter((todo) => todo.status == false);
          break;

        case 3: //Lấy cv chưa hoàn thành
          newArr = arr.filter((todo) => todo.status == true);
          break;

        default:
          newArr = [...arr];
          break;
      }
  todoListEl.innerHTML = "";
  // Array rỗng -> Hiển thị không có công việc trong danh sách
  // Có data -> Render bình thường
  if (newArr.length == 0) {
    todoListEl.innerHTML = `<p class="todos-empty">Không có công việc trong danh sách</p>`;
    return; //để kết thúc
  }
  for (let i = 0; i < newArr.length; i++) {
    const t = newArr[i];
    todoListEl.innerHTML += `
        <div class="todo-item ${t.status ? "active-todo" : ""}">
                    <div class="todo-item-title">
                        <input type="checkbox"
                        ${t.status ? "checked" : ""}
                        onclick="toggleStatus(${t.id})"
                        >
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update"
                        onclick="updateTodo(${t.id})">
                            <img src="./img/pencil.svg" alt="icon">
                        </button>
                        <button class="btn btn-delete"
                        onclick="deleteTodo(${t.id})"
                        >
                            <img src="./img/remove.svg" alt="icon">
                        </button>
                    </div>
                </div>`;

  }

  // Lọc - Lấy ra value trong input filter - duyệt qua 3 ô input, lấy ra ô nào có trạng thái checked, lấy ra value -1,2,3
  // Lọc - Dựa vào value để lọc ra các công việc tương ứng
  // Lọc - Hiển thị công việc sau khi lọc
 //Tạo ra mảng rỗng để ứng kết quả sau khi lọc
}
renderToDo(todos);

// Không truy cập vào dom được nên không dùng eventListener được

// Random ID
function randomId() {
  return Math.floor(Math.random() * 99999 + 1);
}
console.log(todos);

// thay đổi trạng thái
    // Duyệt mảng todos, tìm công việc có id = id truyền vào
    // Nếu status = true > Chuyển thành false
    // Nếu status = false > chuyển thành true
    // gọi renderTodo() để hiện thị lại trên giao diện
function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      if (todos[i].status == false) {
        todos[i].status = true;
      } else {
        todos[i].status = false;
      }
      //   Hoặc: todos[i].status = !todos[i].status
    }
    }
setDataToLocalStorage(todos);
  renderToDo(todos);
}

// todos[i] là object
// todos là mảng
// id là số
// i là vị trí

// Xóa phần tử trong todos
// Duyệt mảng todos, tìm công việc có id trùng với id truyền vào trong func
// Xóa đi - dùng splice
// Sau khi xóa, gọi lại renderTodo() để hiển thị lại
function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos.splice(i, 1);
    }
    }
setDataToLocalStorage(todos);
  renderToDo(todos);
}

// Thêm công việc
// 1. Lấy dữ liệu từ ô input, gắn vào 1 biến "title" /
// 2. Kiểm tra dữ liệu có trống hay không, nếu có thì thông báo => return
// 3. Tạo ra cấu trúc của new todos
// id: random ngẫu nhiên (gọi function createId())
// title: Nội dung trong ô
// status: false
// 4. Push new todo vào todos
// 5. Gọi renderTodo để hiển thị lại

btnAdd.addEventListener("click", function () {
  title = todoInputEl.value;
  if (title == "") {
    alert("Cannot leave task blank");
    return;
  } else {
    let newTodos = [
      {
        id: randomId(),
        title: title,
        status: false,
      },
    ];
    todos.push(...newTodos);
  }

  // or:  let newTodo = {
  // id: randomId(),
  // title: title,
  // status: false,
  // }
setDataToLocalStorage(todos);
  renderToDo(todos);
  todoInputEl.value = ""; //clear nội dung trong ô input
});

// Lọc công việc
    // truy cập vào ô input
    // Dùng vòng lặp để lắng nghe sự kiện, tại 1 thời điểm chỉ có 1 cái được click
    // để itmf ra ô input có thuộc tính check
    // Lấy ra value là 1 khi click vào all
    // Có thể sử dụng if else hoặc switch case để lọc
    // Khi họ check thì lại render một lần nữa
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function () {
    renderToDo(todos);
  });
}

// Sửa
    // Truy cập vào nút sửa, ô input, nút thêm 
    // Lấy title
    // Chuyển title lên ô input
    // Ẩn nút thêm, thêm nút sửa
    // Đổi nút thêm thành nút sửa
    // chuyển nội dung input vào lại vị trí đó
function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (id == todos[i].id) {
            idUpdate = todos[i].id
            todoInputEl.value = todos[i].title
            btnAdd.style.display = "none"
            btnUpdate.style.display = "inline-block"
        }
    }
}

let idUpdate = 0

btnUpdate.addEventListener("click", function () {
    let content = todoInputEl.value
    console.log(idUpdate)
    for (let i = 0; i < todos.length; i++) {
        if (idUpdate == todos[i].id) {
            todos[i].title = content
        }
    }
    setDataToLocalStorage(todos)
    renderToDo(todos)
})

// + Lấy title, chuyển lên ô input, đổi nút thêm thành nút sửa
// +tạo ra một cái modal giữa màn hình và sửa ở đấy (xem trên bootstrap)


// lưu dữ liệu vào local storage - giống ranking
    // Lấy ra data
function getDataFromLocalStorage() {
  let dataLocal = localStorage.getItem("todos");
  // Nếu có dữ liệu thì gán vào
  if (JSON.parse(dataLocal)) {
    todos = JSON.parse(dataLocal)
  } else {
    todos = []
  }
  // Gọi renderRanking truyền vào mảng ranking để hiển thị
  renderToDo(todos)
}

    // Lưu data vào
function setDataToLocalStorage(arr) {
  // Chuyển sang dạng JSON rồi lưu vào
localStorage.setItem('todos', JSON.stringify(arr))
}
getDataFromLocalStorage();
// Gọi function init ra
// onload là khi trang web load xong html, css (đã xuất hiện dom), thì init mới xuất hiện
        
// Xóa hết
btnDelete.addEventListener("click", function () {
    todos = []
    setDataToLocalStorage(todos);
    renderToDo(todos)
})
// Sắếp (theo trạng thái, ngày tạo, mức ưu tiên, deadline) - phải thêm một số thuộc tính vào trực tiếp nút input (ngày tạo, mức độ ưu tiên)