import app from "./app";
import adicionaUsuario from "./adicionaUsuario";
import pesquisaUsuario from "./pesquisaUsuario";
import usuarioPorId from "./usuarioPorId";
import atualizaUsuario from "./atualizaUsuario";
import deletaUsuario from "./deletaUsuario";

// Rota para o endpoint de adicionar Usuario
app.use('/users', adicionaUsuario);

// Rota para o endpoint de Pesquisa de Usuario
app.use('/', pesquisaUsuario);

// Rota para o endpoint de Pesquisa de Usuario por Id
app.use('/', usuarioPorId);

// Rota para o endpoint de Atualizar Dados de Usuário:
app.use('/', atualizaUsuario);

// Rota para o endpoint de Deletar Dados de Usuário:
app.use('/', deletaUsuario);

export default app;