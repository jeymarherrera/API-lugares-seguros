//imports
const {addPlace, getPlace, updatePlace, deletePlace} = require("../controllers/places");
const { addCommentToPlace, getCommentsByPlace, deleteComment } = require("../controllers/comments");
const {Router} = require("express");

//instancia de routers
const router = Router();

//lamada a los endpoint
router.route("/place").post(addPlace).get(getPlace);
//router.post("/place", addPlace).get;

router.put("/place/:placeId", updatePlace);

router.delete("/place/:placeId", deletePlace);

//ruta agregar comentario
router.post("/comments", addCommentToPlace);
router.get("/comments/:placeId", getCommentsByPlace);
router.delete("/comments/:commentId",deleteComment);
module.exports = {router};