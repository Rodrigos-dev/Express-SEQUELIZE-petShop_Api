## BOOTCAMP DESENVOLVERDOR BACKEND 

## Petshop API

# 🐶 Petshop API – Desafio Final (Módulo 3)

Este repositório contém a API do Petshop desenvolvida como parte do Desafio do **Módulo 3** do Bootcamp **Desenvolvedor(a) Node.js**.

O objetivo deste desafio é consolidar os conhecimentos sobre integração com **PostgreSQL** e **MongoDB** utilizando o **Node.js** com **Express**, por meio da criação de endpoints REST para controle de serviços realizados por animais e gestão de blog.

---

## 📚 Objetivos do Desafio

- Refatorar o projeto `petshop-api` usando Sequelize.
- Criar endpoints para controle de serviços de animais (PostgreSQL).
- Criar endpoints para o blog do petshop com comentários (MongoDB).

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL + Sequelize
- MongoDB (Atlas/local) + Mongoose

---

## 🔧 Instalação e Execução
npm install

3. Configure as variáveis de ambiente:
Crie um arquivo .env com as configurações:

env
Copiar
Editar
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=petshop
MONGO_URI=mongodb+srv://seu_usuario:sua_senha@seu_cluster.mongodb.net/blog
⚠️ Certifique-se de criar o banco PostgreSQL e a collection MongoDB antes de iniciar.

4. Execute a aplicação:

npm start


🐾 Endpoints – Serviços dos Animais (PostgreSQL)
🔹 1. Cadastrar um serviço realizado
URL: POST /servico

Body JSON:
{
  "descricao": "Banho e tosa",
  "valor": 80.00,
  "animal_id": 1
}

🔹 2. Consultar todos os serviços cadastrados
URL: GET /servico

Descrição: Retorna uma lista com todos os serviços realizados.

🔹 3. Consultar serviços por proprietário
URL: GET /servico?proprietario_id=15

Descrição: Retorna serviços realizados nos animais de um proprietário específico.

📝 Endpoints – Blog do Petshop (MongoDB)
🔹 1. Cadastrar um post
URL: POST /post

Body JSON:
{
  "titulo": "Como cuidar do seu pet no verão",
  "conteudo": "Hidrate bem seu pet, evite passeios em horários quentes..."
}

🔹 2. Consultar todos os posts
URL: GET /post

Descrição: Retorna todos os posts com seus respectivos comentários.

🔹 3. Adicionar comentário a um post
URL: POST /comentario

Body JSON:
{
  "postId": "60c667caeb7c167026bcc96a",
  "autor": "João",
  "conteudo": "Adorei as dicas!"
}

🧪 Preparação para Avaliação
Antes de responder o questionário final:

Recrie o banco de dados PostgreSQL do zero.

Apague os registros existentes do MongoDB.

Execute os comandos de insert fornecidos no arquivo de apoio.

Isso é essencial para garantir que os IDs dos registros estejam corretos e correspondam ao questionário.

✅ Conclusão
Este projeto foi desenvolvido como parte prática do Bootcamp de Node.js com o intuito de aplicar, na prática, os conhecimentos de banco de dados relacionais e não relacionais com uma API RESTful.


