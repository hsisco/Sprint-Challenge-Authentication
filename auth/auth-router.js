const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../user/user-model.js');

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  
  Users.add(user)
    .then(saved => res.status(201).json(saved))
    .catch(err => res.status(500).json(err));
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  console.log('login')
  
  Users.findBy({ username })
    .first()
    .then(user => {
      console.log('login findBy');
      
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = username;
        res.status(200).json({ message: `Welcome ${user.username}!`, token });
      } else {
        res.status(401).json({ message: 'You shall not pass!' });
      }
      })
      .catch(err => res.status(500).json(err));
});

module.exports = router;