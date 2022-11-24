import express from 'express';
const router = express.Router();
import usersCtrl  from '../../controllers/users.js';

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/




export default router;