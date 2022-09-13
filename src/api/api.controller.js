const express = require("express");;
const router = express.Router();
const {
    createUser,
    getAllTask,
    updateTaskByID,
    deleteTaskByID
} = require("./api.service/")

router.post("/", async (req, res) => {
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
    }
});

router.get("/", async (req, res) => {
    try {
        const gotTask = await getAllTask();
        res.status(200).send(gotTask)
    } catch {
        res.status(404).send(err.message)
    }
});

router.put("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            task
        } = req.body;
        const updadedTaskByID = await updateTaskByID(id, task);
        res.status(200).send(updadedTaskByID)
    } catch (err) {
        res.status(404).send(err.message)
    }
});


router.delete("/:id", async (req, res) => {
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