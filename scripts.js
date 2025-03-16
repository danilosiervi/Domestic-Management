function carregarTarefas() {
    fetch('http://localhost:3000/tarefas/disponiveis')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('listaTarefas');
            lista.innerHTML = '';
            data.forEach(tarefa => {
                const li = document.createElement('li');
                li.textContent = `${tarefa.descricao} - Responsável: ${tarefa.responsavel || 'Nenhum'}`;
                lista.appendChild(li);
            });
        });
}

function criarTarefa() {
    const descricao = prompt('Digite a descrição da tarefa:');
    if (!descricao) return;
    fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao })
    }).then(() => carregarTarefas());
}

window.onload = carregarTarefas;
