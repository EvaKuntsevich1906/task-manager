const {
    pool
} = require("../db");

const createUserDB = async (fullName, email, password) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO users 
        (fullName, email, password) VALUES ($1, $2, $3) 
        RETURNING users.*`;

        const sqlRequest = (await client.query(sql, [fullName, email, password])).rows;

        if (sqlRequest.length === 0) throw new Error("Некорректный ввод");

        await client.query('COMMIT');

        return sqlRequest;
    } catch (err) {
        console.log(`error in usercreateDB ${err}`);
        await client.query('ROLLBACK')
    }
}

const authUserDB = async (email, password) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `select * from users where email = $1 and password = $2`;
        const sqlRequest = (await client.query(sql, [email,password])).rows;
        if (sqlRequest.length === 0) throw new Error("Неверный логин или пароль");
        await client.query('COMMIT');

        return sqlRequest;
    } catch (err) {
        console.log(`error in authUserDB`);
        await client.query(`ROLLBACK`);
        return err.message
    }
}
const createTaskDB = async (task,user_id) => {
    // console.log(task);
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);
        const sql = `INSERT INTO tasks
        (task, user_id) VALUES ($1, $2)
        RETURNING tasks.*`
        const sqlRequest = (await client.query(sql, [task, user_id])).rows;
        if (sqlRequest.length === 0) throw new Error("Некорректный ввод");

        await client.query('COMMIT');

        return sqlRequest;
    } catch (err) {
        console.log(`error in createTaskDB ${err}`);
        await client.query('ROLLBACK')
    }
};

const getAllTaskDB = async () => {
    const client = await pool.connect();
    try {
        const sql = `
               SELECT *  FROM tasks `;

        const sqlRequest = (await client.query((sql))).rows;

        if (sqlRequest.length === 0) throw new Error("Not Found")
        return sqlRequest
    } catch (err) {
        console.log(`err in getAllTaskDB  ${err}`);
    }
}

const updateTaskByIDDB = async (id, task) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `
        UPDATE tasks SET task = $2 
        WHERE id = $1
        RETURNING tasks.* `
        const sqlRequest = (await client.query(sql, [id, task]));
        if (sqlRequest === 0) throw new Error("Not Found");
        await client.query('COMMIT');
        return sqlRequest
    } catch (err) {
        console.log(`err in updateTaskByIDDB ${err}`);
        await client.query('ROLLBACK')
    }
}

const deleteTaskByIDDB = async (id) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `DELETE FROM  tasks WHERE  id = $1`
        const select = `SELECT * FROM tasks`;
        const sqlRequest = (await client.query(sql, [id]));
        const selectRequest = (await client.query(select)).rows;
        await client.query('COMMIT');
        return selectRequest
    } catch (err) {
        console.log(`err in deleteTaskByIDDB ${err}`);
        await client.query('ROLLBACK')
    }
}

module.exports = {
    getAllTaskDB,
    createUserDB,
    createTaskDB,
    authUserDB,
    updateTaskByIDDB,
    deleteTaskByIDDB
};