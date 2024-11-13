// Função para adicionar uma nova tarefa
document.getElementById("form-tarefa").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const novaTarefaTexto = document.getElementById("novaTarefa").value;
    
    if (novaTarefaTexto.trim() !== "") {
        // Cria um novo item da lista
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
            <span class="tarefa-texto">${novaTarefaTexto}</span>
            <div class="tarefa-buttons">
                <button class="editar" onclick="editarTarefa(this)">Editar</button>
                <button class="deletar" onclick="deletarTarefa(this)">Excluir</button>
            </div>
        `;
        
        // Adiciona a nova tarefa à lista de tarefas
        document.getElementById("listaTarefas").appendChild(novaTarefa);
        
        // Limpa o campo de entrada
        document.getElementById("novaTarefa").value = "";
    }
});

// Função para editar uma tarefa
function editarTarefa(button) {
    const tarefaTexto = button.closest("li").querySelector(".tarefa-texto");
    const textoOriginal = tarefaTexto.textContent;
    
    // Cria um campo de edição
    const input = document.createElement("input");
    input.type = "text";
    input.value = textoOriginal;
    
    // Substitui o texto da tarefa por um campo de input
    tarefaTexto.innerHTML = "";
    tarefaTexto.appendChild(input);
    
    // Modifica o botão de edição para confirmar a edição
    button.textContent = "Salvar";
    button.setAttribute("onclick", "salvarTarefa(this)");
}

// Função para salvar as alterações de uma tarefa
function salvarTarefa(button) {
    const tarefaTexto = button.closest("li").querySelector(".tarefa-texto");
    const input = tarefaTexto.querySelector("input");
    
    if (input.value.trim() !== "") {
        tarefaTexto.textContent = input.value;
        button.textContent = "Editar";
        button.setAttribute("onclick", "editarTarefa(this)");
    } else {
        alert("O campo não pode estar vazio!");
    }
}

// Função para excluir uma tarefa
function deletarTarefa(button) {
    const tarefa = button.closest("li");
    tarefa.remove();
}
