# Teste Zaros Othon

## Descrição
Uma API de cadastro de usuários desenvolvida em Node.js, usando Express e Sequelize, como parte do teste de admissão da Zaros.

## Tecnologias Utilizadas
- **Node.js**: Stack principal da aplicação.
- **Express**: Biblioteca para criação e gerenciamento de endpoints.
- **SQLite**: Banco de dados utilizado para persistência.
- **Sequelize**: ORM para interagir com o banco de dados de forma mais simples.

## Funcionalidades
A API permite realizar as seguintes operações:
- **Cadastro de Usuário**: Criação de novos usuários no sistema.
- **Consulta de Usuários**: Recuperação de informações de usuários cadastrados.
- **Atualização de Usuário**: Atualização dos dados de usuários existentes.
- **Exclusão de Usuário**: Remoção de usuários do sistema.

## Instalação
Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/othonaf/Teste_Zaros_Othon.git
   ```

2. Instale as dependências:

```bash
cd Teste_Zaros_Othon
npm install
```
3. Configure o banco de dados (SQLite já está configurado por padrão no projeto).

4. Execute as migrações do Sequelize:

```bash
Copiar código
npx sequelize db:migrate
```
5. Inicie o servidor:

```bash
Copiar código
npm start
```
A API estará disponível em http://localhost:3003.

Exemplos de Uso
Aqui estão alguns exemplos de como interagir com os endpoints da API.

1. Cadastro de Usuário
Endpoint: POST /user
Exemplo de requisição (JSON):
```json
{
  "name": "Othon",
  "email": "othon@example.com",
  "age": 30,
  "active": true
}
```
2. Consulta de Usuários
Endpoint: GET /user

3. Atualização de Usuário
Endpoint: PUT /user/:id
Exemplo de requisição (JSON):
```json
{
  "name": "Othon Updated",
  "email": "othon_updated@example.com",
  "age": 31,
  "active": false
}
```
4. Exclusão de Usuário
Endpoint: DELETE /user/:id