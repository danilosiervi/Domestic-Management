const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Simulação de banco de dados
let tarefas = [];
let idCounter = 1;

// Criar tarefas
app.post('/tarefas', (req, res) => {
    const { descricao } = req.body;
    const novaTarefa = { id: idCounter++, descricao, responsavel: responsavel || null, status: 'pendente' };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Listar tarefas
app.get('/tarefas/disponiveis', (req, res) => {
    const tarefasDisponiveis = tarefas.filter(tarefa => !tarefa.responsavel);
    res.json(tarefasDisponiveis);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Envia o arquivo index.html
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
