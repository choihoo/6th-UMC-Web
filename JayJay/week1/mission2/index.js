const todoInput = document.getElementById("todoInput");
const todoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");

function handleEnterPress(event) {
  if (event.key === "Enter") {
    const newTodo = todoInput.value;
    if (!newTodo.trim()) return;

    const newTodoItem = document.createElement("div");
    newTodoItem.classList.add("todo-item");
    newTodoItem.textContent = newTodo;

    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";

    completeButton.addEventListener("click", function () {
      doneList.appendChild(newTodoItem);
      newTodoItem.removeChild(completeButton);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "삭제"; //버튼에 글자를 삭제로 바꾼다
      newTodoItem.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        newTodoItem.remove(); // '삭제' 버튼 클릭 시 항목 제거
      });
    });

    newTodoItem.appendChild(completeButton);
    todoList.appendChild(newTodoItem);

    todoInput.value = "";
  }
}

todoInput.addEventListener("keypress", handleEnterPress);

completeButton.addEventListener("click", () => {
  const newDoneItem = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  newDoneItem.classList.add("done-item");
  newDoneItem.textContent = newTodoItem.textContent;
});
