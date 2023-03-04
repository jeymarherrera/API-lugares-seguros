//imports
const {addPlace, getPlace, updatePlace} = require("../controllers/places");

const {Router} = require("express");

//instancia de routers
const router = Router();

//lamada a los endpoint
router.route("/place").post(addPlace).get(getPlace);
//router.post("/place", addPlace).get;

router.put("/place/:placeId", updatePlace);

module.exports = {router};