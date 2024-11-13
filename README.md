#Descrição
Projeto de uma aplicação web de gerenciamento de tarefas. A aplicação permite aos usuários criar, editar, excluir e listar tarefas, além de fornecer uma interface intuitiva para busca e filtragem de tarefas. O backend foi desenvolvido em C# com ASP.NET, e o frontend utiliza HTML, CSS e JavaScript para fornecer uma interface dinâmica. Parte do processo seletivo para a vaga de estágio StartUp SESI.

#Estrutura do Projeto

##Lista-de-Tarefas
├── frontend
│   ├── css
│   │   ├── index.css
│   │   └── style.css
│   ├── img
│   │   ├── atividades.png
│   ├── js
│   │   ├── editaRegistro.js
│   │   ├── listarTarefas.js
│   │   ├── script.js
│   │   └── tarefas.js
│   ├── editaRegistro.html
│   ├── index.html
│   ├── listarTarefas.html
│   ├── menuTarefas.html
│   └── tarefas.html
├── backend
│   ├── Controllers
│   │   └── TarefasController.cs
|   |   ├── UsuarioController.cs
│   |
│   ├── Data
│   │   └── SistemadeTarefasDBContext.cs
├──     Enums
│   └── StatusDaTarefa.cs
├──  Migrations
│   └── [Migrações serão geradas aqui]
|   |── Models
│   │   └── TarefaModel.cs
        ├── UsuarioModel.cs
├──  Repository
│   ├── ITarefaRepository.cs
│   └── TarefaRepository.cs
├────── IUsuarioRepository.cs
│   └── UsuarioRepository.cs
│   ├── Program.cs
│   └── appsettings.json
└── README.md

#Tecnologias Utilizadas
Frontend:
HTML5 e CSS3 para a estrutura e estilização das páginas.
JavaScript para a manipulação de DOM e integração com a API.
Bootstrap para componentes responsivos e design moderno.
Backend:
C# com ASP.NET para criação de API RESTful.
Entity Framework Core para integração com o banco de dados.
Postgres SQL como banco de dados relacional.
VisualStudio 2022.
#Funcionalidades
##Usuário:
Cadastro de usuário: Registro de novos usuários.
Login e autenticação: Validação de usuário para acessar o sistema.
##Tarefas:
Criação de Tarefa: Adição de novas tarefas com título e descrição.
Edição de Tarefa: Atualização de informações das tarefas.
Exclusão de Tarefa: Remoção de tarefas.
Listagem e Pesquisa: Visualização e busca de tarefas por título ou descrição.
#Interface do Usuário
As principais telas da aplicação são:

Tela de Login: Autenticação de usuário para acesso.
Tela de Menu: Acesso rápido às funcionalidades (criar, listar, editar, excluir tarefas).
Tela de Listagem: Visualização e pesquisa de tarefas registradas.
Tela de Edição: Formulário para editar tarefas existentes.
Tela de Criação: Formulário para criar novas tarefas.
#Como Executar o Projeto
Pré-requisitos
.NET 6 SDK 
Node.js e npm para executar o frontend (opcional)
PgAdmin para o banco de dados
Configuração do Backend
Clone o repositório:
https://github.com/RebeckaNigro/ListagemTarefasEstagio
bash
#Configure a string de conexão no arquivo appsettings.json:
 "ConnectionStrings": 
   "DataBase": "Host=localhost;Port=8080;;Database=PROJETO_ESTAGIO;User Id=postgres;Password=supervisor"

Pode também acessar a API pelo https://listagemtarefasestagio.azurewebsites.net

#Endpoints da API
Método	Endpoint	Descrição
GET	/api/tarefa	Retorna todas as tarefas
GET	/api/tarefa/{id}	Retorna uma tarefa específica
POST	/api/tarefa	Cria uma nova tarefa
PUT	/api/tarefa/{id}	Atualiza uma tarefa existente
DELETE	/api/tarefa/{id}	Exclui uma tarefa existente
GET	/api/usuario	Retorna todos os usuários
GET	/api/usuario/{id}	Retorna um usuário
POST	/api/usuario	Cria um novo usuário
PUT	/api/usuario/{id}	Atualiza um usuário existente
DELETE	/api/usuario/{id}	Exclui um usuário existente

#Banco de Dados
##A estrutura da tabela de tarefas:
-- Database: PROJETO_ESTAGIO

-- DROP DATABASE IF EXISTS "PROJETO_ESTAGIO";

CREATE DATABASE "PROJETO_ESTAGIO"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

    Para gerar as tabelas de forma mais automatizada é necessário acessar o Console do gerenciador de pacotes e executar 

    Add-Migration InitialDB -Context SistemadeTarefasDBContext
    
    após a execução, inserir:
    Update-Database -Context SistemadeTarefasDBContext

    as tabelas serão geradas de forma automática.

#Pacotes utilizados 
ListagemTarefasEstagio.Data;
Microsoft.EntityFrameworkCore;
Microsoft.EntityFrameworkCore.Infrastructure;
Microsoft.EntityFrameworkCore.Storage.ValueConversion;
Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#Explicação das pastas:
Data/ApplicationDbContext.cs: Define o contexto do banco de dados usando o Entity Framework Core.
Enums/StatusTarefa.cs: Enum para representar o status das tarefas.
Models/Tarefa.cs: Modelo de entidade para representar uma tarefa no banco de dados.
Repository/ITarefaRepository.cs: Interface para o repositório de tarefas.
Repository/TarefaRepository.cs: Implementação do repositório de tarefas com operações CRUD.

#Referencias 

ASP.NET Core Documentation
Entity Framework Core Documentation
Bootstrap Documentation
Ícone de [Atividades] por [GOWI] em [Flaticon](https://www.flaticon.com/br/icone-gratis/atividades_2686222).


#Autor: Rebecka de Lima Nigro.# frontendListasTarefas