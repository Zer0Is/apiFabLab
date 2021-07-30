const getModel = require('./model');

module.exports = {
    async readMaker(req, res){
        const maker = await getModel.readMaker(req.body);
        console.log(maker);
        return res.json(maker);
    },

    async readAyudante(req, res){
        const ayudante = await getModel.readAyudante(req.body);
        console.log(ayudante);
        return res.json(ayudante);
    }
};