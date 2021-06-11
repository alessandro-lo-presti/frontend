import { JWT_SERVICE } from "./../jwt/jwt.js";

export const checkAuth = (req, res, next) => {
  try {
    const userId = JWT_SERVICE.getUserIdFromToken(req.headers.token);

    if (userId) {
      req.userId = userId;
      next();
    } else {
      res.status(401).json();
    }
  } catch (e) {
    res.status(401).json();
  }
};
