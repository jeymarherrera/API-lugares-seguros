const models = require("../../database/models");

const addPlace = async(req, res) => {
    try {
        const{body} = req;
        const place = await models.places.create({
            name:body.name,
            description:body.description,
        }); //SQL -> INSERT TO
        return res.status(201).send(place);
    } catch (error) {
       return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};
//exportar funcion
module.exports = {addPlace};