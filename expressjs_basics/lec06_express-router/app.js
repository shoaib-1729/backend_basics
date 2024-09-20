import express from 'express'
// const student = require('./routes/student.js')
// const teacher = require('./routes/teacher.js')
import student from './routes/student.js'
import teacher from './routes/teacher.js'

const app = express()
const port = process.env.PORT || '3000'

// routes
app.get('/', (req, res) => {
    res.send('Home Page')
})

// use student route using 'use' method
app.use('/student', student)

// use teacher route using 'use' method
app.use('/teacher', teacher)


// listen at port
app.listen(port, () => {
    console.log(`Server is listening at port http://localhost:${port}`);
});