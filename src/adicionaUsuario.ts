import { Router, Request, Response } from 'express';
import User from './models/user';

const router = Router();

// Endpoint para adicionar um novo usuário
router.post('/', async (req: Request, res: Response) => {
  let status: number = 400;
  try {
    const { name, email, age, active } = req.body;
    
    // Validação para verificar se "name" tem pelo menos 3 caracteres
    if (name.length < 3) {
      status = 404
      throw new Error("O nome deve conter pelo menos 3 caracteres");
    }

    // Verifica se o email já existe na base de dados
    const usuarioExistente = await User.findOne({ where: { email } });
    if (usuarioExistente) {
      status = 404
      throw new Error("Email já cadastrado.");
    }

    // Validação para verificar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status = 404
      throw new Error("Email em formato inválido.");
    }

    // Cria um novo usuário no banco de dados
    const newUser = await User.create({ name, email, age, active });
     res.status(201).json(newUser);

  } catch (error: any) {
     res.status(status).json( {Erro: error.message} );
  }
});

export default router;
