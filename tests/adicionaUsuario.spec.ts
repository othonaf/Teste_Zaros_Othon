import request from 'supertest';
import app from '../src/index';
import { sequelize } from '../src/config/database';
import User from '../src/models/user';
import { server } from '../src/app';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
    server.close();
});

describe('POST /users', () => {
    it('deve criar um novo usuário com sucesso', async () => {
        const response = await request(app)
                .post('/users')
                .send({
                    name: 'Joao',
                    email: 'joao@exemplo.com',
                    age: 25,
                    active: true,
                });
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe('Joao');

    });

    it('deve retornar erro se o nome tiver menos de 3 caracteres', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Al',
                email: 'al@exemplo.com',
                age: 25,
                active: true,
            });

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ Erro: 'O nome deve conter pelo menos 3 caracteres' });
    });

    it('deve retornar erro se o email já estiver cadastrado', async () => {
        await User.create({ name: 'Alice', email: 'alice@exemplo.com', age: 25, active: true });

        const response = await request(app)
            .post('/users')
            .send({
                name: 'Bod',
                email: 'alice@exemplo.com',
                age: 30,
                active: true,
            });

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ Erro: 'Email já cadastrado.' });
    });

    it('deve retornar erro se o email tiver formato inválido', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Bob',
                email: 'bob_exemplo.com',
                age: 30,
                active: true,
            });

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ Erro: 'Email em formato inválido.' });
    });
});
