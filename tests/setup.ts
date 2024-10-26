import { sequelize } from '../src/config/database';
import {server} from '../src/app';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
  server.close();
});
