const { NotExtended } = require('http-errors');
const db = require('../../db');

module.exports = {
    async create(maker){
        try{
            if(maker.categoria === 'estudiante'){
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

            else if(maker.categoria === 'ayudante'){
                const individuo = await db('makers').insert({
                rut: maker.rut,
                categoria: maker.categoria,
                nombre: maker.nombre,
                rango: maker.rango
                })
                .returning('*');

                return individuo;
            }

            else if(maker.categoria === 'externo'){
                const individuo = await db('makers').insert({
                rut: maker.rut,
                categoria: maker.categoria,
                nombre: maker.nombre
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
        try{
            //externo
            if(maker.rut != null && maker.categoria === 'externo'){
                if(maker.nombre != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('nombre', maker.nombre)
                    .returning('*');

                    return individuo;
                }
            }
            //estudiante
            if(maker.rut != null && maker.categoria === 'estudiante'){
                
                if(maker.nombre != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('nombre', maker.nombre);
                }
                if(maker.carrera != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('carrera', maker.carrera);
                }
                if(maker.campus != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('campus', maker.campus);
                }

                const individuo = await db('makers').where({
                    rut: maker.rut,
                    categoria: maker.categoria
                });

                console.log(individuo);
                console.log(maker);

                return individuo;
            }
            //ayudante
            if(maker.rut != null && maker.categoria === 'ayudante'){
                if(maker.nombre != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('nombre', maker.nombre);

                }
                if(maker.rango != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut,
                        categoria: maker.categoria
                    })
                    .update('rango', maker.rango);  
                }

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

    async delete(maker){
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