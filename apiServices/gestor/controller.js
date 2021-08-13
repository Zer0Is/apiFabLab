const gestorModel = require('./model');

module.exports = {
    async create(req, res){
        const gestor = await gestorModel.create(req.body);
        if (gestor.status === 400){
            if(gestor.error !== null){
                return res.status(400).json({msg : gestor.error});
            }
            return res.status(400).json({msg : "incompatibilidad de datos"});
        }
        return res.json(gestor);
    },

    async read(req, res){
        const gestor = await gestorModel.read(req.body);
        return res.json(gestor);
    },

    async update(req, res){
        const gestor = await gestorModel.update(req.body);
        return res.json(gestor);
    },

    async delete(req, res){
        const gestor = await gestorModel.delete(req.body);
        return res.json(gestor);
    }
};