import { DB_SERVICE } from "../db/dbService.js";
import { JWT_SERVICE } from "../jwt/jwt.js";

export const loginApi = (req, res) => {
    const userDB = DB_SERVICE.findUser(req.body.username, req.body.password);

    if (userDB) {
        res.status(200).json({ token: JWT_SERVICE.createToken(userDB.id) });
    } else {
        res.status(401).send();
    }
};
