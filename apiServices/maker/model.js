const { NotExtended } = require('http-errors');
const db = require('../../db');

module.exports = {
    async create(maker){
        const individuo = 0;
        try{
            if(maker.rango != null){
                const individuo = await db('makers').insert({
                rut: maker.rut,
                categoria: maker.categoria,
                nombre: maker.nombre,
                carrera: maker.carrera,
                campus: maker.campus,
                rango: maker.rango
                })
                .returning('*');

                return individuo;
            }
            //hacer peticion usando db minuto 29:29 limk: https://www.youtube.com/watch?v=wfrn21E2NaU&ab_channel=productioncoder
            else{
                const individuo = await db('makers').insert({
                rut: maker.rut,
                categoria: maker.categoria,
                nombre: maker.nombre,
                carrera: maker.carrera,
                campus: maker.campus
                })
                .returning('*');

                return individuo;
            }
        }
        catch(error) {
            console.log(error);
        }
    },

    async read(maker){
        const individuo = 0;
        try{
            //No lleva parametros
            if (Object.keys(maker).length === 0){
                const individuo = await db('makers');
                return individuo;
            }
            //solo categoria
            else if (Object.keys(maker).length === 1 && maker.categoria != null){
                const individuo = await db('makers').where('categoria', maker.categoria);
                return individuo;
            }
            //solo rut
            else if (Object.keys(maker).length === 1 && maker.rut != null){
                const individuo = await db('makers').where('rut', maker.rut);
                return individuo;
            }
            //ambos
            else if (Object.keys(maker).length === 2 && maker.categoria != null && maker.rut != null){
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

    async update(maker){
        const individuo = 0;
        try{
            //lleva todos los atributos
            if(maker.rut != null && maker.categoria != null && maker.nombre != null && maker.campus != null && maker.carrera != null && maker.rango != null){
                const individuo = await db('makers').where({
                    rut: maker.rut,
                    categoria: maker.categoria
                })
                .update({
                    nombre: maker.nombre,
                    campus: maker.campus,
                    carrera: maker.carrera,
                    rango: maker.rango
                })
                .returning('*');
            }

            else{
                if(maker.rut != null && maker.categoria != null && maker.nombre != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('nombre', maker.nombre)
                    .returning('*');
                }
                if(maker.rut != null && maker.categoria != null && maker.campus != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('campus', maker.campus)
                    .returning('*');
                }
                if(maker.rut != null && maker.categoria != null && maker.carrera != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('carrera', maker.carrera)
                    .returning('*');
                }
                if(maker.rut != null && maker.categoria != null && maker.rango != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('rango', maker.rango)
                    .returning('*');
                }
            }

            const individuo = await db('makers').where({
                rut: maker.rut,
                categoria: maker.categoria
            });
            return individuo;
        }
        catch(error) {
            console.log(error);
        }
    },

    async delete(maker){
        const individuo = 0;
        try{
            const individuo = await db('makers').where({
                rut: maker.rut,
                categoria: maker.categoria
            })
            .del()
            .returning('*');
            return individuo;
        }
        catch(error) {
            console.log(error);
        }
    }    
};