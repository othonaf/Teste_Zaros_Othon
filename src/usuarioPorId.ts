import { Router, Request, Response } from 'express';
import User from './models/user';

const router = Router();

router.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).send("Usuário não encontrado.")
        }
        else {
            res.json(user)
        }

    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});

export default router;
