import { DB_SERVICE } from "../db/dbService.js";
import { JWT_SERVICE } from "../jwt/jwt.js";

export const loginApi = async (req, res) => {
  try {
    const userId = await DB_SERVICE.findUser(
      req.body.username,
      req.body.password
    );
    if (userId) {
      res.json({ token: JWT_SERVICE.createToken(userId) });
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(500).send();
  }
};
