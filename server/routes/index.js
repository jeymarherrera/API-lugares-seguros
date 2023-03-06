//imports
const { addPlace, getPlace, updatePlace, deletePlace } = require("../controllers/places");
const { addCommentToPlace, getCommentsByPlace, deleteComment } = require("../controllers/comments");
const { addLikeDislike } = require("../controllers/likes");
const { registry } = require("../controllers/users");
const { login } = require("../controllers/login");
const {verifyToken} = require("../middlewares/auth");
const {Router} = require("express");

//instancia de routers
const router = Router();

//llamada a los 
//agregar, actualizar y eliminar place
router.route("/place").post(verifyToken, addPlace).get(getPlace);
//router.post("/place", addPlace).get;
router.put("/place/:placeId", updatePlace);
router.delete("/place/:placeId", deletePlace);

//ruta agregar, obtener y eliminar comentario
router.post("/comments", verifyToken, addCommentToPlace);
router.get("/comments/:placeId", getCommentsByPlace);
router.delete("/comments/:commentId",deleteComment);

//ruta agregar, quitar like
router.post("/likes", verifyToken, addLikeDislike);

//registro de usuario
router.post("/registry", registry);

//login de usuario
router.post("/login", login);
module.exports = {router};