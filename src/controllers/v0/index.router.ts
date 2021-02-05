import { Router } from 'express';
import { AuthRouter } from './auth/auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

export const IndexRouter: Router = router;