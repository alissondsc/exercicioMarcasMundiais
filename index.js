import express from 'express'
import router from './src/router/pessoa.js'

const app = express()
app.use(express.json())

app.use(router)

app.listen(3000, () => {
    console.log("servidor na porta 3000")
})