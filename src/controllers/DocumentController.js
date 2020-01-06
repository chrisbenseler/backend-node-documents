const Document = require('../models/Document');

const store = async (req,res) => {
  const { userid: userId } = req.headers;

  try {

    let documents = await Document.findOne({ user: userId});

    if (!documents) {
      documents = await Document.create({
        user: userId,
      });
    }

    return res.status(200).json({ 
      documents
    });

  } catch(err) {
    return res.status(400).json({
      errMessage: err.message,
      message: "User with this Id not found"
    });
  }
}

const show = async (req,res) => {
  const { userid: userId } = req.headers;

  try {
    const documents = await Document.findOne({ user: userId});

    return res.status(200).json({ 
      documents
    });
  } catch(err) {
    return res.status(400).json({
      message: "Documents of this user not found"
    });
  }
}

module.exports = {
  store,
  show
}