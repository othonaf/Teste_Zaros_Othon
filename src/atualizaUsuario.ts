import { Router, Request, Response } from 'express';
import User from './models/user';

const router = Router();

router.put('/users/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const { name, email, age, active } = req.body;
        
        //Estou usando o Id para achar o usuário (Pelo Id), mas o Id não será atualizado:
        const userUpdate = await User.findByPk(id)
        if (!userUpdate) {
            throw new Error("Usuário não encontrado");
        }
        // Validação para verificar se "name" tem pelo menos 3 caracteres
        if (name.length <= 3) {
            throw new Error("O nome deve conter pelo menos 3 caracteres");
        }

        // Validação para verificar o formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Email em formato inválido.");
        }

        await User.update({ 
            name: name,
            email: email,
            age: age,
            active: active 
          }, {
            where: { 
              id: id
            }
          });
          res.status(201).send("Registro Atualizado com Sucesso!")
          
    } catch (error: any) {
        res.status(500).json({ Erro: error.message });
    }
});

export default router;