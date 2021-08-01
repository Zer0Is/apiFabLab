const gestorModel = require('./model');

module.exports = {
    async create(req, res){
        const gestor = await gestorModel.create(req.body);
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