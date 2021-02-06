import { Router, Request, Response } from 'express';

const router: Router = Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User1 = {
  name: "Taro",
  password: "Taro123"
};


passport.use(new LocalStrategy(
  (username: any, password:any, done:any) => {

    if(username !== User1.name){
      // Error
      return done(null, false);
    } else if(password !== User1.password) {
      // Error
      console.log("error");
      return done(null, false);
    } else {
      // Success and return user information.
      return done(null, { username: username, password: password});
    }
  }
));

router.use(passport.initialize());

router.post('/login',
  (req, res, next) => {
    console.log(req);
    next();
  },
  passport.authenticate('local',
    {
      session: false,
      failureRedirect : '/api/v0/auth/login'
    }
  ),
  (req, res) => {
    console.log(req);
    res.send('Success');
  }
);

router.get('/login', async(req: Request, res: Response) => {
  res.sendFile(__dirname + '/auth.html');
});

export const AuthRouter: Router = router;
