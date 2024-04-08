document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('input[type="text"]');
    const todoContainer = document.querySelector('.todo');
    const doneContainer = document.querySelector('.done');
    const todoTitle = document.querySelector('.todo-title');
    const doneTitle = document.querySelector('.done-title');

    function createTaskItem(taskText, container) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const taskTextNode = document.createElement('span');
        taskTextNode.textContent = taskText;
        todoItem.appendChild(taskTextNode);

        const actionButton = document.createElement('button');
        actionButton.textContent = container === todoContainer ? '완료' : '삭제';
        actionButton.addEventListener('click', function() {
            if (container === todoContainer) {
                todoContainer.removeChild(todoItem);
                doneContainer.appendChild(todoItem);
                actionButton.textContent = '삭제';
                actionButton.addEventListener('click', function() {
                    doneContainer.removeChild(todoItem);
                });
            } else {
                container.removeChild(todoItem);
            }
        });
        todoItem.appendChild(actionButton);

        container.appendChild(todoItem);
        inputField.value = '';
    }

    todoTitle.addEventListener('click', function() {
        const inputValue = inputField.value.trim();
        if (inputValue !== '') {
            createTaskItem(inputValue, todoContainer);
        }
    });

    doneTitle.addEventListener('click', function() {
        const inputValue = inputField.value.trim();
        if (inputValue !== '') {
            createTaskItem(inputValue, doneContainer);
        }
    });
});
