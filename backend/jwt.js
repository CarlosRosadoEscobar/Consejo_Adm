// middleware/auth.js
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido' });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    return res.status(401).json({ error: 'Se requiere token de autenticación' });
  }
};

module.exports = { requireAuth };
