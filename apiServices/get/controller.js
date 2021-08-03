const getModel = require('./model');

module.exports = {
    async readMaker(req, res){
        console.log(req.params);
        const maker = await getModel.readMaker(req.params);
        return res.json(maker);
    },

    async readAyudante(req, res){
        const ayudante = await getModel.readAyudante(req.params);
        return res.json(ayudante);
    }
};