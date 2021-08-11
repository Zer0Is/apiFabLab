const { NotExtended } = require('http-errors');
const requestify = require('requestify');
const db = require('../../db');

const depurar = (objeto) => {
    objeto.forEach(function(parametro, index) {
        if (parametro.categoria.toLowerCase() === 'ayudante'){
            delete parametro.carrera
            delete parametro.campus
            delete parametro.institucion
        }
        else if (parametro.categoria.toLowerCase() === 'externo'){
            delete parametro.carrera
            delete parametro.campus
            delete parametro.rango
        }
        else if (parametro.categoria.toLowerCase() === 'estudiante'){
            delete parametro.rango
            delete parametro.gestor
            delete parametro.institucion
        }
    });
    return objeto;
}
module.exports = {
    async create(maker){
        try{
            if(maker.categoria.toLowerCase() === 'estudiante'){
                const individuo = await db('makers').insert({
                rut: maker.rut.toLowerCase(),
                categoria: maker.categoria.toLowerCase(),
                nombre: maker.nombre.toLowerCase(),
                carrera: maker.carrera.toLowerCase(),
                campus: maker.campus.toLowerCase(),
                correo: maker.correo.toLowerCase() 
                })
                .returning('*');

                const individuo2 = depurar(individuo);

                return individuo2;
            }

            else if(maker.categoria.toLowerCase() === 'ayudante'){
                console.log("si");
                const individuo = await db('makers').insert({
                rut: maker.rut.toLowerCase(),
                categoria: maker.categoria.toLowerCase(),
                nombre: maker.nombre.toLowerCase(),
                rango: maker.rango,
                gestor: maker.gestor.toLowerCase(),
                correo: maker.correo.toLowerCase()
                })
                .returning('*');

                const individuo2 = depurar(individuo);

                return individuo2;
            }

            else if(maker.categoria.toLowerCase() === 'externo'){
                const individuo = await db('makers').insert({
                rut: maker.rut.toLowerCase(),
                categoria: maker.categoria.toLowerCase(),
                nombre: maker.nombre.toLowerCase(),
                gestor: maker.gestor.toLowerCase(),
                correo: maker.correo.toLowerCase(),
                institucion: maker.institucion.toLowerCase()
                })
                .returning('*'); 

                const individuo2 = depurar(individuo);

                return individuo2;
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
                const individuo = await db('makers');

                const individuo2 = depurar(individuo);

                return individuo2;
            }
            //solo categoria
            else if (Object.keys(maker).length === 1 && maker.categoria != null){
                const individuo = await db('makers').where('categoria', maker.categoria.toLowerCase());
                const individuo2 = depurar(individuo);

                return individuo2;
            }
            //solo rut
            else if (Object.keys(maker).length === 1 && maker.rut != null){
                const individuo = await db('makers').where('rut', maker.rut.toLowerCase());

                const individuo2 = depurar(individuo);

                return individuo2;
            }
            //solo gestor
            else if (Object.keys(maker).length === 1 && maker.gestor != null){
                const individuo = await db('makers').where('rut', maker.gestor.toLowerCase());

                const individuo2 = depurar(individuo);

                return individuo2;
            }
            //ambos
            else if (Object.keys(maker).length === 2 && maker.categoria != null && maker.rut != null){
                const individuo = await db('makers').where({
                    rut: maker.rut.toLowerCase(),
                    categoria: maker.categoria.toLowerCase()
                });

                const individuo2 = depurar(individuo);     

                return individuo2;
            }
        }
        catch(error) {
            console.log(error);
            return error.detail;
        }
    },

    async update(maker){
        try{
            //externo
            if(maker.rut != null && maker.categoria.toLowerCase() === 'externo'){
                if(maker.nombre != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('nombre', maker.nombre.toLowerCase())
                    .returning('*');
                }
                if(maker.gestor != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('gestor', maker.gestor.toLowerCase())
                    .returning('*');
                }
                if(maker.correo != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('correo', maker.correo.toLowerCase())
                    .returning('*');
                }
                if(maker.institucion != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('institucion', maker.institucion.toLowerCase())
                    .returning('*');
                }
                const individuo = await db('makers').where({
                    rut: maker.rut.toLowerCase(),
                    categoria: maker.categoria.toLowerCase()
                });

                const individuo2 = depurar(individuo);
                    
                return individuo2;
            }
            //estudiante
            if(maker.rut != null && maker.categoria.toLowerCase() === 'estudiante'){
                
                if(maker.nombre != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('nombre', maker.nombre.toLowerCase());
                }
                if(maker.carrera != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('carrera', maker.carrera.toLowerCase());
                }
                if(maker.campus != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('campus', maker.campus.toLowerCase());
                }
                if(maker.correo != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('correo', maker.correo.toLowerCase())
                    .returning('*');
                }

                const individuo = await db('makers').where({
                    rut: maker.rut.toLowerCase(),
                    categoria: maker.categoria.toLowerCase()
                });

                const individuo2 = depurar(individuo);
                    
                return individuo2;
            }
            //ayudante
            if(maker.rut != null && maker.categoria.toLowerCase() === 'ayudante'){
                if(maker.nombre != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('nombre', maker.nombre.toLowerCase());

                }
                if(maker.rango != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('rango', maker.rango);  
                }
                if(maker.gestor != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('gestor', maker.gestor.toLowerCase())
                    .returning('*');
                }
                if(maker.correo != null){
                    const individuo = await db('makers').where({
                        rut: maker.rut.toLowerCase(),
                        categoria: maker.categoria.toLowerCase()
                    })
                    .update('correo', maker.correo.toLowerCase())
                    .returning('*');
                }
                const individuo = await db('makers').where({
                    rut: maker.rut.toLowerCase(),
                    categoria: maker.categoria.toLowerCase()
                });

                const individuo2 = depurar(individuo);
                    
                return individuo2;
            }
        }
        catch(error) {
            console.log(error);
            return error.detail;
        }
    },

    async delete(maker){
        try{
            const individuo = await db('makers').where({
                rut: maker.rut.toLowerCase(),
                categoria: maker.categoria.toLowerCase()
            })
            .del()
            .returning('*');

            const individuo2 = depurar(individuo);

            console.log(individuo2);
            
            requestify.delete('https://isw-group-14.herokuapp.com/proyectos/maker/' + individuo2.id).then((result) =>{
                console.log(result);
            }).catch((err) =>{
                console.log(err);
            });
            

            return individuo2;
        }
        catch(error) {
            console.log(error);
            return error.detail
        }
    }    
};