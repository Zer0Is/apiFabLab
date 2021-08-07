const getModel = require('./model');
//const requestify = require('requestify');

module.exports = {
    async readMaker(req, res){
        const maker = await getModel.readMaker(req.body);

        //var resultado = await requestify.post('http://localhost:3000/get/maker', {id: 1}).then((response) =>{
        //    console.loog(response.getBody());
        //});

        return res.json(maker);
    },

    async readAyudante(req, res){
        const ayudante = await getModel.readAyudante(req.body);
        return res.json(ayudante);
    }
};