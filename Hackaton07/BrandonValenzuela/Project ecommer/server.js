const express = require("express");
const routerUser = require("./user/routerUser.js");

const initServer = async() => {

 const serverExpress = express();


 serverExpress.use(express.json());


 serverExpress.use("/", routerUser);

   serverExpress.get("/api", (req, res,)=> {
    res.send("helloooo");

  });

   serverExpress.listen(3000, ()=> {

    console.log("servidor iniciado en port 3000");
  });
}

module.exports = initServer;