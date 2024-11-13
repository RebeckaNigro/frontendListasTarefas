document.addEventListener("DOMContentLoaded", () => {
    const listaTarefas = document.getElementById("listaTarefas");

    const tarefas = [
        { id: 1, titulo: "Implementar Tela de Login", descricao: "Adicionar validação de usuário" }
    ];

    const renderizarTarefas = () => {
        listaTarefas.innerHTML = "";
        tarefas.forEach((tarefa) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div>
                    <strong>${tarefa.titulo}</strong> - ${tarefa.descricao}
                </div>
            `;
            li.classList.add("tarefa-item");
            listaTarefas.appendChild(li);
        });
    };

    // Botão de voltar para a tela de adição de tarefas
    document.getElementById("voltar").addEventListener("click", () => {
        window.location.href = "tarefas.html"; // Navega para a página de adição
    });

    renderizarTarefas();
});
