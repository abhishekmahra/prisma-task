import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CustomRequest extends Request {
  user?: any;
}

export const addToy = async (req: CustomRequest, res: Response) => {
  const { name, type } = req.body;
  const userId = req.user.id;

  const toy = await prisma.toy.create({
    data: {
      name,
      type,
      userId,
    },
  });

  res.status(201).json(toy);
};

export const getToyByName = async (req: Request, res: Response) => {
  const { name } = req.query;

  const toys = await prisma.toy.findMany({
    where: { name: { contains: name as string } },
  });

  res.json(toys);
};

export const updateToy = async (req: CustomRequest, res: Response) => {
  const { id } = req.params;
  const { name, type } = req.body;
  const userId = req.user.id;

  const toy = await prisma.toy.updateMany({
    where: {
      id: parseInt(id),
      userId,
    },
    data: {
      name,
      type,
    },
  });

  if (toy.count === 0) {
    return res.status(404).json({ error: 'Toy not found or not authorized' });
  }

  res.json({ message: 'Toy updated successfully' });
};

export const deleteToy = async (req: CustomRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;

  const toy = await prisma.toy.deleteMany({
    where: {
      id: parseInt(id),
      userId,
    },
  });

  if (toy.count === 0) {
    return res.status(404).json({ error: 'Toy not found or not authorized' });
  }

  res.json({ message: 'Toy deleted successfully' });
};
