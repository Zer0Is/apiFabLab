const getModel = require('./model');
//const requestify = require('requestify');

module.exports = {
    async readMaker(req, res){
        const maker = await getModel.readMaker(req.body);
        if(maker.status === 400){
            return res.status(400).json({msg : maker.error});
        }
        else if(maker.msg != null){
            return res.json(maker)
        }
        return res.json(maker);
    },

    async readAyudante(req, res){
        const ayudante = await getModel.readAyudante(req.body);
        if(ayudante.status === 400){
            return res.status(400).json({msg : ayudante.error});
        }
        else if(ayudante.msg != null){
            return res.json(ayudante)
        }
        return res.json(ayudante);
    }
};