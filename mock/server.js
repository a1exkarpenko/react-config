const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// init database
let db = null
try {
    const data = fs.readFileSync('./mock/db.json', 'utf8')
    db = JSON.parse(data)
} catch (err) {
    throw new Error(err)
}

// router
const router = express.Router()

// GET / - получение базы данных
router.get('/', (req, res) => {
    res.json(db)
})

// middlewares
app.use(bodyParser.json())
app.use('/api', router)

app.listen(port, () => console.log(`Server started on port = ${port}`))
