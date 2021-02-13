const express = require('express')
const { DateTime } = require('luxon');

const responseTime = require('response-time')

const app = express()
const port = 3000

app.use(responseTime((req, res, time) => {
    const timeOdj = DateTime.local()
    const date = timeOdj.toISODate()
    const mytime = timeOdj.toISOTime()
    //2019-5-17 18:51:12 | GET from /
    console.log(`${date} ${mytime} | ${req.method} from ${req.url} | total time: ${time}ms`);

}))

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
