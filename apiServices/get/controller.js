const getModel = require('./model');

module.exports = {
    async readMaker(req, res){
        const maker = await getModel.readMaker(req.body);
        return res.json(maker);
    },

    async readAyudante(req, res){
        const ayudante = await getModel.readAyudante(req.body);
        return res.json(ayudante);
    }
};