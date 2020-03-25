require('dotenv').config()

const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// app.use(cors({
//   origin: 'http://meuapp.com'
// }))

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333)

//parei em 1:12min -  https://rocketseat.com.br/week/aulas/11.0?aula=2