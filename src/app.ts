import express from 'express';
import { sequelize } from './config/database'; 
import { AddressInfo } from "net";;

const app = express();
app.use(express.json()); 

// Sincroniza o banco de dados
sequelize.sync().then(() => {
  console.log('Database synced!');
});

export const server = app.listen(process.env.PORT || 3003, () => {
      if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em ${address.address}:${address.port}`);
      } else {
        console.error(`Falha ao iniciar Servidor .`);
      }
    });

export default app;
