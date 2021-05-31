export const loginApi = (req, res) => 
    (req.query.username == 'ale' && req.query.password == '123456')
    ? res.status(200).json({"response": 'Logged'})
    : res.status(401).json({'response': 'Not Authorized'});