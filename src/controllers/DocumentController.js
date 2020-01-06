const Document = require('../models/Document');

module.exports = {
  async store(req,res) { 
    const { userid: userId } = req.headers;

    if(!userId) {
      return res.status(403).json({
        message: "User not allowed"
      });
    }

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
}