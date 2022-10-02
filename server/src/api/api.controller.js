const express = require("express");;
const router = express.Router();
const {
    getAllTask,
    createUser,
    createTask,
    authUser,
    updateTaskByID,
    deleteTaskByID
} = require("./api.service")

router.post("/users/registr", async (req, res) => {
    try {
        const {
            fullName,
            email,
            password
        } = req.body;
        const createdUser = await createUser(fullName, email, password)
        res.status(200).send(createdUser);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message)
    }
});

router.post("/tasks/create", async (req, res) => {
    try {
        const {
            task,
            user_id
        } = req.body;
        // console.log(task);
        const createdTask = await createTask(task, user_id);
        res.status(200).send(createdTask);
    } catch (err) {
        console.log(err.message);
    }
});

router.post("/users/auth", async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        console.log(email, password);
        const authedUsers = await authUser(email, password);
        res.status(200).send(authedUsers)
    } catch (err) {
        console.log(err.message);
    }
})


router.get("/", async (req, res) => {
    try {
        const gotTask = await getAllTask();
        res.status(200).send(gotTask)
    } catch {
        res.status(404).send(err.message)
    }
});

router.put("/tasks/update", async (req, res) => {
    try {
        const {
            id,
            task
        } = req.body;
        const updadedTaskByID = await updateTaskByID(id, task);
        res.status(200).send(updadedTaskByID)
    } catch (err) {
        res.status(404).send(err.message)
    }
});


router.delete("tasks/delete/", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deletedTaskByID = await deleteTaskByID(id);
        res.status(200).send(deletedTaskByID)
    } catch (err) {
        res.status(200).send(err.message)
    }

});

module.exports = router