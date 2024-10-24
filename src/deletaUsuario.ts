import { Router, Request, Response } from 'express';
import User from './models/user';

const router = Router();

router.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        //Estou usando o Id para achar o usuário (Pelo Id), mas o Id não será atualizado:
        const userDelete = await User.findByPk(id)
        if (!userDelete) {
            throw new Error("Usuário não encontrado");
        }
        await userDelete.destroy();

        res.status(201).send("Registro Deletado com Sucesso!")

    } catch (error: any) {
        res.status(500).json({ Erro: error.message });
    }
});

export default router;