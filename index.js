require('dotenv').config();
const app = require("./src/app");
const port = process.env.port;

app.listen(port, () => {
    console.log(`Server is running, ${port}`);
})