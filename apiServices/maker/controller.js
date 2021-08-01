const makerModel = require('./model');

module.exports = {
    async create(req, res){
        const maker = await makerModel.create(req.body);
        return res.json(maker);
    },

    async read(req, res){
        const maker = await makerModel.read(req.body);
        /*
        const maker2 = {
            Items : maker,
            count : maker.length 
        };
        console.log(maker2.Items);

        return res.json(maker2);*/
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
