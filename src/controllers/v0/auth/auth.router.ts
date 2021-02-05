import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', async(req: Request, res: Response) => {
  res.sendFile(__dirname + '/auth.html');
});

export const AuthRouter: Router = router;
