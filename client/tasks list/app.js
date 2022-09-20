const save = document.querySelector(`.save`);

save.addEventListener(`click`, () => {
    try {
        const createTask = document.querySelector(`.nameTask`).value;
        const updateTask = document.querySelector(`.numberTask`).value;
        const updateTaskNumber = document.querySelector(`.task`).value;
        const deleteTaskNumber = document.querySelector(`.numberTaskDel`).value;
        if (createTask.length > 0 ) {
            const createTask = (task) => {

            }
        }
    } catch (err) {
        console.log(err.message);
    }
})