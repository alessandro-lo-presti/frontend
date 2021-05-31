const token = "logged";

export const loginApi = (req, res) =>
    req.body.username == "ale" && req.body.password == "123456"
        ? res.status(200).json({ response: token })
        : res.status(401).send();

export const isLogged = (req, res, next) => {
    req.headers.token && req.headers.token == token
        ? next()
        : res.status(401).json({ message: "Not Authorized" });
};
