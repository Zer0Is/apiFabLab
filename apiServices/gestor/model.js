const { NotExtended } = require('http-errors');
const db = require('../../db');

module.exports = {
    async create(maker){
        try{
            if (maker.rut != null && maker.nombre != null){
                const gestor = await db('gestor').insert({
                rut: maker.rut,
                nombre: maker.nombre
                })
                .returning('*');

                return gestor;
            }
        }
        catch(error) {
            console.log(error);
        }
    },

    async read(maker){
        try{
            //No lleva parametros
            if (Object.keys(maker).length === 0){
                const gestor = await db('gestor');
                return gestor;
            }
            //solo rut (PK)
            else if (Object.keys(maker).length === 1 && maker.rut != null){
                const gestor = await db('gestor').where('rut', maker.rut);
                return gestor;
            }
            //solo nombre
            else if (Object.keys(maker).length === 1 && maker.nombre != null){
                const gestor = await db('gestor').where('nombre', maker.nombre);
                return gestor;
            }
        }
        catch(error) {
            console.log(error);
        }
    },

    async update(maker){
        try{
            //solo permite cambiar el nombre
            if(maker.rut != null && maker.nombre != null){
                const gestor = await db('gestor').where('rut', maker.rut)
                .update('nombre', maker.nombre);
            }

            //retorna gestor perteneciente al rut
            const gestor = await db('gestor').where('rut', maker.rut);
            return gestor;

        }
        catch(error) {
            console.log(error);
        }
    },

    async delete(maker){
        try{
            const gestor = await db('gestor').where('rut', maker.rut)
            .del()
            .returning('*');
            return gestor;
        }
        catch(error) {
            console.log(error);
        }
    }    
};