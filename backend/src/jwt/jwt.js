import jwt from "jsonwebtoken";

const SECRET = "secret";
const EXPIRES_SECONDS = 15;

const createToken = (userId) =>
    jwt.sign(
        {
            userId: userId,
        },
        SECRET,
        { expiresIn: EXPIRES_SECONDS }
    );

const getUserIdFromToken = (token) => jwt.verify(token, SECRET).userId;

export const JWT_SERVICE = {
    createToken: createToken,
    getUserIdFromToken: getUserIdFromToken,
};
