let express = require('express')
let app = express()
let indexRouter = require('./routers/main')
let aboutRouter = require('./routers/main')

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('servidor funcionando')
})

app.use('/', indexRouter)
app.use('/about', aboutRouter)