import { NextFunction, Request, Response, Router } from 'express';
import { registerSchema } from './schemas/register.schema';
import schemaValidatorMiddleware from '../../common/validator/joi.validator';
import { broadcastMessage } from '../../../src/socket';
const router = Router();
let messages = [];  
import { uuid } from 'uuidv4';

router.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('messa',messages);
    res.json(messages);
  } catch (error) {
    next(error);
  }
});


router.post('/add', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const message = req.body;
    message.id = uuid();

    // Ограничение объема памяти до 9 сообщений
    if (messages.length >= 2) {
        let deleted_message =  messages.shift();
        broadcastMessage("deleted",deleted_message)
    } 
    
    messages.push(message);
    broadcastMessage("added",message)

    res.status(201).json(messages);
  } catch (error) {
    next(error);
  }
});

export default router;