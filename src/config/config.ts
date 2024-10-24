import { SequelizeOptions } from 'sequelize-typescript';

const config: { [key: string]: SequelizeOptions } = {
  development: {
    dialect: 'sqlite',
    storage: 'database.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: 'database.sqlite'
  },
  production: {
    dialect: 'sqlite',
    storage: 'database.sqlite'
  }
};

export default config;
