import request from 'supertest';
import app from '../src/index';
import User from '../src/models/user';

describe('Testes para o endpoint de atualização de usuário', () => {

  let userId: number;
  beforeAll(async () => {
    const user = await User.create({
      name: "Teste Inicial",
      email: "teste@inicial.com",
      age: 30,
      active: true
    });
    userId = user.id;
  });

  afterAll(async () => {
    await User.destroy({ where: { id: userId } });
  });

  it('Deve atualizar o usuário com sucesso', async () => {
    const response = await request(app).put(`/users/${userId}`).send({
      name: "Novo Nome",
      email: "novoemail@exemplo.com",
      age: 35,
      active: false
    });

    expect(response.status).toBe(201);
    expect(response.text).toBe("Registro Atualizado com Sucesso!");
  });

  it('Deve retornar erro se o usuário não for encontrado', async () => {
    const response = await request(app).put(`/users/9999`).send({
      name: "Teste",
      email: "teste@exemplo.com",
      age: 30,
      active: true
    });

    expect(response.status).toBe(500);
    expect(response.body.Erro).toBe("Usuário não encontrado");
  });

  it('Deve retornar erro se o nome tiver menos de 3 caracteres', async () => {
    const response = await request(app).put(`/users/${userId}`).send({
      name: "Jo",
      email: "joao@exemplo.com",
      age: 25,
      active: true
    });

    expect(response.status).toBe(500);
    expect(response.body.Erro).toBe("O nome deve conter pelo menos 3 caracteres");
  });

  it('Deve retornar erro se o email estiver em formato inválido', async () => {
    const response = await request(app).put(`/users/${userId}`).send({
      name: "Nome Válido",
      email: "emailinvalido",
      age: 28,
      active: true
    });

    expect(response.status).toBe(500);
    expect(response.body.Erro).toBe("Email em formato inválido.");
  });
});
