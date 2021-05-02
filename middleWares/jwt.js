const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next) {
    
    const token = req.cookies.JWT;
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(req.cookies.JWT, process.env.TOKEN_SECRET, function(err, decoded) {
        if (!err && decoded.is_admin) {
                next()
        } else {
         return res.sendStatus(403)

        }
      });
  }