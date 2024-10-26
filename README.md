# Teste Zaros Othon

## Descrição
Uma API de cadastro de usuários desenvolvida em Node.js, usando Express e Sequelize, como parte do teste de admissão da Zaros.

## Tecnologias Utilizadas
- **Node.js**: Stack principal da aplicação.
- **Express**: Biblioteca para criação e gerenciamento de endpoints.
- **SQLite**: Banco de dados utilizado para persistência.
- **Sequelize**: ORM para interagir com o banco de dados de forma mais simples.
- **Jest**: Biblioteca para criação e execução de testes automatizados.

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
npx sequelize db:migrate
```
5. Inicie o servidor:

```bash
npm run dev
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
  "email": "othon@exemplo.com",
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
  "email": "othon_updated@exemplo.com",
  "age": 31,
  "active": false
}
```
4. Exclusão de Usuário
Endpoint: DELETE /user/:id

## Testes Automatizados

Este projeto utiliza **Jest** e **Supertest** para testar os endpoints da API. Abaixo estão os detalhes e orientações para os arquivos de teste.

### Configuração dos Testes

Os testes estão localizados na pasta `tests`. Certifique-se de que todas as dependências estão instaladas e o ambiente está configurado corretamente antes de executar os testes.

### Instalação

```bash
npm install
```

### Executando os Testes
Para rodar todos os testes:
**_Obs_**: Para uma melhor desenvoltura, recomendo executar os testes nos arquivos um por vez:

1. Testando o Endpoint de adicionar um usuário:
```bash
npx jest tests/adicionaUsuario.spec.ts
```

2. Testando o Endpoint de Atualizar um usuário:
```bash
npx jest tests/atualizaUsuario.spec.ts
```

3. Testando o Endpoint de Deletar um usuário:
```bash
npx jest tests/deletaUsuario.spec.ts
```

4. Testando o Endpoint de pesquisar um usuário:
```bash
npx jest tests/pesquisaUsuario.spec.ts
```

5. Testando o Endpoint de pesquiar um usuário por Id:
```bash
npx jest tests/usuarioPorId.spec.ts
```

## Arquivos de Teste

### adicionaUsuario.spec.ts
Este arquivo contém testes para o endpoint de adicionar um novo usuário.
Testes Incluídos:

1. Criação de um novo usuário com sucesso.

2. Validação de nome com menos de 3 caracteres.

3. Validação de email já existente.

4. Validação de formato de email inválido.

### atualizaUsuario.spec.ts
Este arquivo contém testes para o endpoint de atualizar um usuário.
estes Incluídos:

1. Atualização de dados do usuário com sucesso.

2. Validação de campos obrigatórios.

### deletaUsuario.spec.ts
Este arquivo contém testes para o endpoint de deletar um usuário.
Testes Incluídos:

1. Deleção de um usuário com sucesso.

2. Retorno de erro ao tentar deletar um usuário inexistente.

### pesquisaUsuario.spec.ts
Este arquivo contém testes para o endpoint de pesquisar usuários com filtros.
Testes Incluídos:

1. Retorno de todos os usuários.

2. Filtragem de usuários por nome.

3. Filtragem de usuários por idade mínima.

4. Filtragem de usuários por idade máxima.

5. Filtragem de usuários por faixa etária.

### pesquisaUsuarioPorId.spec.ts
Este arquivo contém testes para o endpoint de pesquisar um usuário por ID.
Testes Incluídos:

1. Pesquisa de usuário por ID com sucesso.

2. Retorno de erro ao pesquisar um ID inexistente.

## Ambiente de Teste
O banco de dados usado para testes é configurado para rodar em memória, garantindo que os testes sejam isolados e não interfiram no banco de dados de desenvolvimento ou produção.