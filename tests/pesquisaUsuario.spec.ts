import request from 'supertest';
import app from '../src/index';
import { sequelize } from '../src/config/database';
import User from '../src/models/user';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate([
    { name: 'Alice', email: 'alice@exemplo.com', age: 25, active: true },
    { name: 'Bob', email: 'bob@exemplo.com', age: 30, active: true },
    { name: 'Charlie', email: 'charlie@exemplo.com', age: 35, active: true },
  ]);
});

afterAll(async () => {
  await sequelize.close();
});

describe('GET /users', () => {
  it('deve retornar todos os usuários', async () => {
    const response = await request(app)
      .get('/users')
      .send();

    console.log(response.body);
    console.log(response.status);

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(3);
  });

  it('deve filtrar usuários pelo nome', async () => {
    const response = await request(app)
      .get('/users?name=Al')
      .send();

    console.log(response.body); 
    console.log(response.status); 

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe('Alice');
  });

  it('deve filtrar usuários pela idade mínima', async () => {
    const response = await request(app)
      .get('/users?idadeMin=30')
      .send();

    console.log(response.body); 
    console.log(response.status); 

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toBe('Bob');
    expect(response.body[1].name).toBe('Charlie');
  });

  it('deve filtrar usuários pela idade máxima', async () => {
    const response = await request(app)
      .get('/users?idadeMax=30')
      .send();

    console.log(response.body); 
    console.log(response.status); 

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toBe('Alice');
    expect(response.body[1].name).toBe('Bob');
  });

  it('deve filtrar usuários pela faixa etária', async () => {
    const response = await request(app)
      .get('/users?idadeMin=25&idadeMax=35')
      .send();

    console.log(response.body); 
    console.log(response.status);

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
});
