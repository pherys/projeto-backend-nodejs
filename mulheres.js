const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Fernanda Brito',
        imagem: 'https://avatars.githubusercontent.com/u/93785872?v=4',
        minibio: 'Desenvolvedora em formacao'
    },
    {
        nome: 'Fernanda Brito',
        imagem: 'https://avatars.githubusercontent.com/u/93785872?v=4',
        minibio: 'Desenvolvedora em formacao'
    },
    {
        nome: 'Fernanda Brito',
        imagem: 'https://avatars.githubusercontent.com/u/93785872?v=4',
        minibio: 'Desenvolvedora em formacao'
    }

]

function mostraMulheres(request, response) {
    response.json(mulheres)
    }

function mostraPorta() {
console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)