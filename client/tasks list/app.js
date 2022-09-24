const save = document.querySelector(`.save`);

save.addEventListener(`click`, async () => {
    try {
        const createTask  = document.querySelector(`.nameTask`).value;
        let object = {
            task: createTask,
            user_id: 1
        }
        if (createTask.length > 0) {
            const response = await fetch(`http://localhost:3000/api/tasks/create`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            });
            
            alert(`Задача успешно создана`);
        }
        const updateTaskNumber = document.querySelector(`.numberTask`).value;
        const updateTask = document.querySelector(`.task`).value;
        const deleteTaskNumber = document.querySelector(`.numberTaskDel`).value;
        if (updateTaskNumber.length > 0 && deleteTaskNumber.length > 0) {
                alert(`Пожалуйста, напишите одну операцию над задачей`)
        } else if (updateTaskNumber.length > 0 && updateTask.length > 0) {
            const response = await fetch(`http://localhost:3000/api/tasks/update`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({updateTaskNumber :updateTaskNumber , updateTask: updateTask})
            });
            alert (`Задача успешно обновлена`)
        } else if (deleteTaskNumber.length > 0) {
            const response = await fetch(`http://localhost:3000/api/tasks/delete`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({deleteTaskNumber: deleteTaskNumber})
            });
            alert (`Задача удалена`)
        } else {
            alert(`Заполните хотя-бы одно поле`)
        }
    } catch (err) {
        console.log(err.message);
    }
})