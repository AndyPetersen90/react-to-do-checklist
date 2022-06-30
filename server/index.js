const express = require('express');
const cors = require('cors');
const PORT = 4000;
const sequelize = require('./sequelize')

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/getCategories', async (req, res) => {
    sequelize.query(`
        SELECT * FROM categories
    `)
    .then((dbRes) => res.status(200).send(dbRes[0]))
})

app.get('/api/tasks', async (req, res) => {
    sequelize.query(`
        SELECT * FROM tasks t
        JOIN categories c
        ON t.category = c.id
    `)
    .then((dbRes) => res.status(200).send(dbRes[0]))
})

app.post('/api/tasks', async (req, res) => {
    const {task_name, category} = req.body
    sequelize.query(`
        INSERT INTO tasks (task_name, category)
        VALUES(
            '${task_name}',
            ${category})
    `)
    .then(dbRes => res.status(200).send("success"))
})

app.listen(PORT, () => console.log(`Port is exactly ${PORT}`));
