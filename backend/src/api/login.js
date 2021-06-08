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
  try {
    jwt.verify(req.headers.token, "segreto");
    next();
  } catch (e) {
    res.status(401).json({ response: e.message });
  }
};
