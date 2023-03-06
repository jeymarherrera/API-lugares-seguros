const { json } = require("sequelize");
const models = require("../../database/models");
const {fileUpload} = require("../utils/uploadFiles");

const addPlace = async(req, res) => {
    try {
        const{body} = req;

        let image = fileUpload(body.image, "/public");
        image = `http://localhost:5050${image}`;
        
        //agregar
        const address = await models.address.create({
            state:body.state,
            city:body.city,
            suburb:body.suburb,
            street:body.street,
            postal_code:body.postal_code,
        });
        console.log(`address ${JSON.stringify(address)}`)
        const place = await models.places.create({
            name:body.name,
            description:body.description,
            addressId:address.id,
            image,
        }); //SQL -> INSERT TO
        return res.status(201).send(place);
    } catch (error) {
       return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

const getPlace = async(req, res) => {
    try {
        //consultar todos
        const places = await models.places.findAll({
            attributes:{exclude:["updatedAt"]},
            //filtro
            where:{
                statusDelete: false,
                //name:"Restaurante El Dorado",
            },
            //join
            include: [
            {
                model: models.address, // este es el modelo que quiero unir
                //model: models.users,
                //as: 'Direccion',
                attributes:{exclude:['createdAt', 'updatedAt']},
            }, 
            {
                model: models.likes,
                //taer attributos
                attributes:['id', 'isLike', 'userId'],
            }],
        });
        return res.status(200).send(places);
    } catch (error) {
        console.log(error)
        return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error en el servidor")
    };
};

const updatePlace = async(req, res) => {
    try {
        // 1. Que lugar es el que quiero actualizar?
        //console.log(JSON.stringify(req.params));
        const { placeId } = req.params; // se obtiene el id del place
       // console.log(JSON.stringify(body));
        const { body } = req;
        
        // 2. Verificar que el lugar exista
        const place = await models.places.findOne({
            where: {
                id: placeId,
            },
        });
        
        //si no encuentra el place
        if(!place) return res.status(404).send("El lugar no se encuentra");   
        
        // si quisieramos actualizar la dirección
        const address = await models.address.findOne({
            where: {
                id: place.addressId,
            },
        });
        
        // 3. Actualizar datos        
        await place.update({
            name:body.name,
            description:body.description,
        });

        // actualizamos la dirección
        if (address)
        await address.update({
            state:body.state,
            city:body.city,
            suburb:body.suburb,
            street:body.street,
            postal_code:body.postal_code
        });

        // 4. Devolver una respuesta
        return res.status(200).send(place);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Lo sentimos ha ocurrido un error");
    };
};

const deletePlace = async(req, res) => {
    try {
        // 1. Que lugar es el que quiero actualizar?
        //console.log(JSON.stringify(req.params));
        const { placeId } = req.params; // se obtiene el id del place
        
        // 2. Verificar que el lugar exista
        const place = await models.places.findOne({
            where: {
                id: placeId,
                statusDelete: false,
            },
        });
        
        //si no encuentra el place
        if(!place) return res.status(404).send("El lugar no se encuentra");   
        
        // 3. Actualizar datos        
        await place.update({
           statusDelete: true,
        });

        // 4. Devolver una respuesta
        return res.status(200).send("Se ha eliminado exitosamente.");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Lo sentimos ha ocurrido un error");
    };
};
//exportar funcion
module.exports = {addPlace , getPlace, updatePlace, deletePlace};