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
        const sql = ``;

        return
    } catch (err) {
        console.log(`error in authUserDB`);
        await client.query(`ROLLBACK`);
    }
 }
const createTaskDB = async (task) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);
        const sql = `INSERT INTO tasks
        (task) VALUES ($1)
        RETURNING tasks.*`
        const sqlRequest = (await client.query(sql, [task])).rows;
        if (sqlRequest.length === 0) throw new Error("Некорректный ввод");

        await client.query('COMMIT');

        return sqlRequest;
    }catch (err) {
        console.log(`error in usercreateDB ${err}`);
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
    updateTaskByIDDB,
    deleteTaskByIDDB
};