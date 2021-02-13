const express = require('express')
const { DateTime } = require('luxon');

const app = express()
const port = 3000

app.use((req, res, next) => {
    const timeOdj = DateTime.local()
    const date = timeOdj.toISODate()
    const time = timeOdj.toISOTime()
    //2019-5-17 18:51:12 | GET from /
    console.log(`${date} ${time} | ${req.method} from ${req.url}`);
    next()
})

app.get('/', (req, res) => {
    res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
    res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
    res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
    res.send('新增一筆  Todo')
})

app.listen(port, () => {
    console.log(`已經連線到http://localhost:${port}`)
})
