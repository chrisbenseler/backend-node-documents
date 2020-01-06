// index, show, store, update, destroy
const User = require('../models/User');

const store = async (req, res) => {
  const { email, password } = req.body;

    let user = await User.findOne({ email });

    if(user) {
      return res.status(400).json({ message: "User already created"});
    }

    user = await User.create({
      email, 
      password
    });

    return res.status(201).json({
      id: user._id,
      email: user.email
    });
}

const show = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if(!user) {
    return res.status(401).json({ message: "Usuário não cadastrado!" });
  }

  if (user.password != password) {
    return res.status(401).json({ message: "Senha incorreta!"});
  }

  return res.status(200).json({ 
    id: user.id,
    email
  });
}

module.exports = {
  store,
  show
}; 