const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

const User = require('../../user/models/user');
const generateToken = require('../../../controllers/auth_controller');

router.post('/login', async (req, res) => {

    const { email, password } = req.body;
  
    const user = await User.findOne({ email }).select('+password');
  
    if(!user) 
     return res.status(400).send({ error: 'User not found'});
    
    if(!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'Invalid password'});
  
    user.password = undefined;
    
    res.send({ 
      user, 
      token: generateToken({ id: user.id })
    });
  
  });
  
  module.exports = app => app.use(router);