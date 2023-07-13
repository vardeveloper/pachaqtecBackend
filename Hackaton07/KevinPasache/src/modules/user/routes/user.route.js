const { Router } = require("express");
const UserService = require("../services/user.service");
const routes = Router();

const userService = new UserService();

routes.get("/", (req, res) => {
  //   res.send("Hello");
  res.json([
    {
      name: "draven",
    },
    {
      name: "axes",
    },
  ]);
});

routes.post("/", userService.crear);

module.exports = routes;