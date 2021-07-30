const makerModel = require('./model');

module.exports = {
    async create(req, res){
        const maker = await makerModel.create(req.body);
        console.log(maker);
        return res.json(maker);
    },

    async read(req, res){
        const maker = await makerModel.read(req.body);
        console.log(maker);
        return res.json(maker);
    },

    async update(req, res){
        const maker = await makerModel.update(req.body);
        console.log(maker);
        return res.json(maker);
    },

    async delete(req, res){
        const maker = await makerModel.delete(req.body);
        console.log(maker);
        return res.json(maker);
    }
};
