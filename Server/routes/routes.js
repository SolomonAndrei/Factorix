const express=require('express');
const User=require('../Models/user.js')
const { signup, login, isAuth }=require('../Controllers/auth.js');

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "public"});
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});
module.exports=router;
