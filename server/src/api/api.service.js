const {
    getAllTaskDB,
    createUserDB,
    createTaskDB,
    authUserDB,
    updateTaskByIDDB,
    deleteTaskByIDDB
} = require("./api.repository");

const createUser = async (name, email, password) => {
    const createdUserDB = await createUserDB(name, email, password)
    return createdUserDB
}
const createTask = async (task, user_id) => {
    const createdTaskDB = await createTaskDB(task, user_id)
    return createdTaskDB
}
const authUser = async (email, password) => {
    const authedUserDB = await authUserDB(email, password)
    return authedUserDB
}
const getAllTask = async () => {
    const gottTaskDB = await getAllTaskDB()
    return gottTaskDB
}

const updateTaskByID = async (id, task, user_id) => {
    const updatedTaskByIDDB = await updateTaskByIDDB(id, task, user_id)
    return updatedTaskByIDDB
}

const deleteTaskByID = async (id, user_id) => {
    const deletedTaskByIDDB = await deleteTaskByIDDB(id, user_id)
    return deletedTaskByIDDB
}
module.exports = {
    createUser,
    getAllTask,
    createTask,
    authUser,
    updateTaskByID,
    deleteTaskByID
}