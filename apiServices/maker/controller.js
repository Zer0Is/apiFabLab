const makerModel = require('./model');

module.exports = {
    async create(req, res){
        const maker = await makerModel.create(req.body);
        return res.json(maker);
    },
    async read(req, res){
        
    },
    async update(req, res){
        
    },
    async delete(req, res){
        
    }
};