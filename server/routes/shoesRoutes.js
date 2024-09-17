const shoesRoutes = (app) => {
    
  const shoes = require("../controller/shoes.controller.js");

  var router = require("express").Router();

  router.get("/getshoes", shoes.getShoesDetails);

  app.use("/api", router);
};

module.exports = shoesRoutes;
