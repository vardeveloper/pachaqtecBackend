const { Router } = require("express");

const routes = Router();


routes.get("/", async (req, res) => {
  res.json([
    {
      name: "draven",
    },
    {
      name: "axes",
    },
  ]);
});


module.exports = routes;