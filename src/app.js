import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

// import {PORT} from './config.js'

const app = express()

// Para que pueda enviar json y no me salga undefined
app.use(express.json())

app.use(indexRoutes)
// Forma sesolicitar todoslos empleados,añadimos api delante de employeesRoutes
app.use('/api',employeesRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  })
})

export default app