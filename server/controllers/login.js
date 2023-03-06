const bcryptjs = require("bcryptjs");
const models = require("../../database/models");

const login = async(req, res)=>{
    try {
        const {body} = req;
        //buscar registro en la bd
        //comparar contrasena si existe
        const findUser =await models.users.findOne({
            where:{
                username: body.username,
            },
        });
        if(!findUser) 
            return res.status(404).send("The username wasn't found");

        if (!bcryptjs.compareSync(body.password, findUser.password))
            return res.status(404).send("The password isn't correct");

        //no mostrar contrasena
        delete findUser.dataValues.password;
        
        return res.status(200).send(findUser);
        
    } catch (error) {
        return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error en el servidor");
    }
}

module.exports = {login};