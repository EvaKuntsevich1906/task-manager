const {
    getAllTaskDB,
    createUserDB,
    createTaskDB,
    updateTaskByIDDB,
    deleteTaskByIDDB
} = require("./api.repository");

const createUser = async (name, email, password) => {
    const createdUserDB = await createUserDB(name, email, password)
    return createdUserDB
}
const  createTask = async (task) => {
    const createdTaskDB = await createTaskDB(task)
    return createdTaskDB
}

const getAllTask = async () => {
    const gottTaskDB = await getAllTaskDB()
    return gottTaskDB
}

const updateTaskByID = async(id, task) => {
    const updatedTaskByIDDB =  await updateTaskByIDDB(id,task)
    return updatedTaskByIDDB
}

const deleteTaskByID = async (id) => {
    const deletedTaskByIDDB = await deleteTaskByIDDB(id)
    return deletedTaskByIDDB
}
module.exports = {
    createUser,
    getAllTask,
    createTask,
    updateTaskByID,
    deleteTaskByID
}