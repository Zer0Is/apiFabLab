const makerModel = require('./model');

module.exports = {
    async create(req, res){
        const maker = await makerModel.create(req.body);
        if (maker.status === 400){
            if(maker.error !== null){
                return res.status(400).json({msg : maker.error});
            }
            return res.status(400).json({msg : "incompatibilidad de datos"});
        }
        return res.json(maker);
    },

    async read(req, res){
        const maker = await makerModel.read(req.body);
        return res.json(maker);
    },

    async update(req, res){
        const maker = await makerModel.update(req.body);
        return res.json(maker);
    },

    async delete(req, res){
        const maker = await makerModel.delete(req.body);
        return res.json(maker);
    }
};
