import jwt from "jsonwebtoken";

export const loginApi = (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  const token = jwt.sign({}, "segreto", { expiresIn: 15 });

  user.username == "ale" && user.password == "123456"
    ? res.status(200).json({ response: token })
    : res.status(401).send();
};

export const isLogged = (req, res, next) => {
  req.headers.token && req.headers.token == token
    ? next()
    : res.status(401).json({ message: "Not Authorized" });
};
