const userIdVerify = (req,res,next) => {

  const { userid: userId } = req.headers;

  if(!userId) {
    return res.status(403).json({
      message: "User not allowed"
    });
  }

  next();

}

module.exports = {
  userIdVerify
}