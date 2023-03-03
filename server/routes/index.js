//imports
const {addPlace} = require("../controllers/places");
const {Router} = require("express");

//instancia de routers
const router = Router();

//lamada a los endpoint
router.post("/place", addPlace);

module.exports = {router};