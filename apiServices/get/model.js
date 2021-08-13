const { NotExtended } = require('http-errors');
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
    async readMaker(maker){
        try{
            if(maker.id != null){
                const individuo = await db('makers').where('id' , maker.id);

                if(individuo.length === 0){
                    return {msg : "ID no encontrado"}
                }

                const individuo2 = depurar(individuo);

                return individuo2;
            }
            else{
                return {
                    status : 400,
                    error : 'Falta ID'
                };
            }
        }
        catch(error) {
            console.log(error);
            return error.detail;
        }
    },

    async readAyudante(ayudante){
        try{
            if(ayudante.id != null){
                const individuo = await db('makers').where({
                    id: ayudante.id,
                    categoria: 'ayudante'
                });

                if(individuo.length === 0){
                    return {msg : "ID no encontrado"}
                }
                
                const individuo2 = depurar(individuo);

                return individuo2;
            }
            else{
                return {
                    status : 400,
                    error : 'Falta ID'
                };
            }
        }
        catch(error) {
            console.log(error);
            return {
                status : 400,
                error : error.detail
            };
        }
    }
};