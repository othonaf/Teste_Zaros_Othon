import request from 'supertest';
import app from '../src/index';
import { sequelize } from '../src/config/database';
import User from '../src/models/user';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await User.create({ name: 'Alice', email: 'alice@exemplo.com', age: 25, active: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('GET /users/:id', () => {
  it('deve retornar um usuário por ID com sucesso', async () => {
    const response = await request(app)
      .get('/users/1')
      .send();

    console.log(response.body);
    console.log(response.status);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Alice');
  });

  it('deve retornar erro se o usuário não for encontrado', async () => {
    const response = await request(app)
      .get('/users/10000') 
      .send();

    console.log(response.body); 
    console.log(response.status); 

    expect(response.status).toBe(404);
    expect(response.text).toBe('Usuário não encontrado.');
  });
});
