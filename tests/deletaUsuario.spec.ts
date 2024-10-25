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

describe('DELETE /users/:id', () => {
    it('deve deletar um usuário com sucesso', async () => {
        const response = await request(app)
            .delete('/users/1')
            .send();

        console.log(response.body); 
        console.log(response.status); 

        expect(response.status).toBe(201);
        expect(response.text).toBe('Registro Deletado com Sucesso!');
    });

    it('deve retornar erro se o usuário não for encontrado', async () => {
        const response = await request(app)
            .delete('/users/10000') 
            .send();

        console.log(response.body); 
        console.log(response.status); 

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ Erro: 'Usuário não encontrado' });
    });
});
