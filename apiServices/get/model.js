const { NotExtended } = require('http-errors');
const db = require('../../db');

module.exports = {
    async readMaker(maker){
        try{
            if(maker.rut != null && maker.categoria != null){
                const individuo = await db('makers').where({
                    rut: maker.rut,
                    categoria: maker.categoria
                });

                return individuo;
            }
        }
        catch(error) {
            console.log(error);
        }
    },

    async readAyudante(ayudante){
        try{
            if(ayudante.rut != null){
                const individuo = await db('makers').where({
                    rut: ayudante.rut,
                    categoria: 'ayudante'
                });

                return individuo;
            }
        }
        catch(error) {
            console.log(error);
        }
    }
};