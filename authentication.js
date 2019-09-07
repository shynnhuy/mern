const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.Authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid',
        });
      }
      req.userData = decoded;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied',
    });
  }
};
