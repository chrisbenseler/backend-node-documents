// index, show, store, update, destroy
const User = require('../models/User');

const store = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      return res.boom.badRequest('Missing parameters');
    }

    let user = await User.findOne({ email });

    if(user) {
      return res.boom.badRequest('User already created');
    }

    user = await User.create({
      email, 
      password
    });

    return res.status(201).json({
      id: user._id,
      email: user.email
    });
  } catch(e) {
    return res.boom.badImplementation(e);
  }
}

const show = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.boom.badRequest('Missing parameters');
  }

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