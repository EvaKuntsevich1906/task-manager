const save = document.querySelector(`.save`);

save.addEventListener(`click`,  async () => {
    try {
        const createTask = document.querySelector(`.nameTask`).value;
        // console.log(createTask);
        const updateTask = document.querySelector(`.numberTask`).value;
        const updateTaskNumber = document.querySelector(`.task`).value;
        const deleteTaskNumber = document.querySelector(`.numberTaskDel`).value;
        let object = {
            task : createTask, 
            user_id : 1
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
    } catch (err) {
        console.log(err.message);
    }
})