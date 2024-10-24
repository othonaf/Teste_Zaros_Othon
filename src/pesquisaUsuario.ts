import { Router, Request, Response } from 'express';
import User from './models/user';
import { Op } from 'sequelize';

const router = Router();

// Endpoint para listar e filtrar usuários
router.get('/users', async (req: Request, res: Response) => {
  try {
    const { name, idadeMin, idadeMax } = req.query;

    let whereClause: any = {};

    if (name) {
      whereClause.name = { 
        [Op.like]: `%${name}%` 
      };
    }

    if (idadeMin || idadeMax) {
      whereClause.age = {};
      if (idadeMin) {
        whereClause.age[Op.gte] = idadeMin;
      }
      if (idadeMax) {
        whereClause.age[Op.lte] = idadeMax;
      }
    }

    const users = await User.findAll({ where: whereClause });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
});

export default router;
