const { NotExtended } = require('http-errors');
const db = require('../../db');

module.exports = {
    async create(maker){
        try{
            if (maker.rut != null && maker.nombre != null){
                const gestor = await db('gestor').insert({
                rut: maker.rut.toLowerCase(),
                nombre: maker.nombre.toLowerCase()
                })
                .returning('*');

                return gestor;
            }
        }
        catch(error) {
            console.log(error);
            return error.detail;
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
                const gestor = await db('gestor').where('rut', maker.rut.toLowerCase());
                return gestor;
            }
            //solo nombre
            else if (Object.keys(maker).length === 1 && maker.nombre != null){
                const gestor = await db('gestor').where('nombre', maker.nombre.toLowerCase());
                return gestor;
            }
            //rut y nombre
            else if (Object.keys(maker).length === 2 && maker.nombre != null && maker.rut != null){
                const gestor = await db('gestor').where({
                    nombre : maker.nombre.toLowerCase(),
                    rut : maker.rut.toLowerCase()
                });
                return gestor;
            }
        }
        catch(error) {
            console.log(error);
            return error.detail;
        }
    },

    async update(maker){
        try{
            //solo permite cambiar el nombre
            if(maker.rut != null && maker.nombre != null){
                const gestor = await db('gestor').where('rut', maker.rut.toLowerCase())
                .update('nombre', maker.nombre.toLowerCase());
            }

            //retorna gestor perteneciente al rut
            const gestor = await db('gestor').where('rut', maker.rut.toLowerCase());
            return gestor;

        }
        catch(error) {
            console.log(error);
            return error.detail;
        }
    },

    async delete(maker){
        try{
            const gestor = await db('gestor').where('rut', maker.rut.toLowerCase())
            .del()
            .returning('*');
            return gestor;
        }
        catch(error) {
            console.log(error);
            return error.detail;
        }
    }    
};