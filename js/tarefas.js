// Dados de exemplo de tarefas
const tarefas = [
    { id: 1, nome: "TESTE1" },
    { id: 2, nome: "TESTE2" },
    { id: 3, nome: "TESTE3" },
    { id: 4, nome: "TESTE4" },
    { id: 5, nome: "TESTE5" }
];

// Função para exibir as tarefas
function listarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista antes de adicionar

    tarefas.forEach(tarefa => {
        const itemTarefa = document.createElement("li");
        itemTarefa.textContent = tarefa.nome;
        listaTarefas.appendChild(itemTarefa);
    });
}

// Função para pesquisar tarefas
function pesquisarTarefa() {
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    const listaTarefas = document.getElementById("listaTarefas");

    listaTarefas.innerHTML = ""; // Limpa a lista antes de mostrar as tarefas filtradas

    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.nome.toLowerCase().includes(pesquisa));

    tarefasFiltradas.forEach(tarefa => {
        const itemTarefa = document.createElement("li");
        itemTarefa.textContent = tarefa.nome;
        listaTarefas.appendChild(itemTarefa);
    });
}

// Inicializa a lista ao carregar a página
listarTarefas();
