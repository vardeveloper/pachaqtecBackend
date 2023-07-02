const { response } = require("express")

class UserService {
    crear(req,res = response) {
        const data = req.body;
        res.json(data);
    }
}

module.exports = UserService;