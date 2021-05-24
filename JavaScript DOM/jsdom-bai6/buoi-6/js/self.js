if (arr.length == 0) {
  toDoList.innerHTML = `<p class="todos-empty">Không có công việc trong danh sách</p>`;
  return; //để kết thúc
} else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].status === false) {
        toDoList.innerHTML += `
            <div class="todo-item">
                    <div class="todo-item-title">
                        <input type="checkbox">
                        <p>${arr[i].title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update">
                            <img src="./img/pencil.svg" alt="icon">
                        </button>
                        <button class="btn btn-delete">
                            <img src="./img/remove.svg" alt="icon">
                        </button>
                    </div>
                </div>`;
      } else {
        toDoList.innerHTML += `
            <div class="todo-item active-todo">
                    <div class="todo-item-title">
                        <input type="checkbox" checked>
                        <p>${arr[i].title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update">
                            <img src="./img/pencil.svg" alt="icon">
                        </button>
                        <button class="btn btn-delete">
                            <img src="./img/remove.svg" alt="icon">
                        </button>
                    </div>
                </div>`;
      }
    }
  }
}
