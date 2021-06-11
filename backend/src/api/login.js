import { DB_SERVICE } from "../db/dbService.js";
import { JWT_SERVICE } from "../jwt/jwt.js";

export const loginApi = (req, res) => {
  DB_SERVICE.findUser(req.body.username, req.body.password)
    .then((user_id) => {
      if (user_id) {
        res.json({ token: JWT_SERVICE.createToken(user_id) });
      } else {
        res.status(400).send();
      }
    })
    .catch(() => {
      res.status(500).send();
    });
};
