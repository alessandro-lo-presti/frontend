export const loginApi = (req, res) => 
    (req.query.username == 'ale' && req.query.password == '123456')
    ? res.status(200).json({"response": 'logged'})
    : res.status(401).json({'response': 'not authorized'});

export const isLogged = (req, res, next) =>
    req.query.token == 'logged' ? next() : res.status(401).json({'message': 'Not Authorized'});