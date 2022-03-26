const router = require ('express').Router();
const {registerValidation, loginValidation} = require('../controllers/validation');

//Register
router.post('/register', registerValidation);

//Login
router.post('/login', async (req, res) => {
    //Validate request data based on schema
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if user is already registered
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email does not exist');
    
    //Check if password is correct
    const valid_password = await bcrypt.compare (req.body.password, user.password);
    if(!valid_password) return res.status(401).send('Incorrect password');
    
    //Create a JWT token
    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);
    res.header('access_token', token).send(token);

});

module.exports = router;