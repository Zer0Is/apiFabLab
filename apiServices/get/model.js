const { NotExtended } = require('http-errors');
const db = require('../../db');

const depurar = (objeto) => {
    objeto.forEach(function(parametro, index) {
        delete parametro.id
        if (parametro.categoria.toLowerCase() === 'ayudante'){
            delete parametro.carrera
            delete parametro.campus
        }
        else if (parametro.categoria.toLowerCase() === 'externo'){
            delete parametro.carrera
            delete parametro.campus
            delete parametro.rango
        }
        else if (parametro.categoria.toLowerCase() === 'estudiante'){
            delete parametro.rango
        }
    });
    return objeto;
}

module.exports = {
    async readMaker(maker){
        try{
            if(maker.rut != null && maker.categoria != null){
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
        }
    },

    async readAyudante(ayudante){
        try{
            if(ayudante.rut != null){
                const individuo = await db('makers').where({
                    rut: ayudante.rut.toLowerCase(),
                    categoria: 'ayudante'
                });

                const individuo2 = depurar(individuo);

                return individuo2;
            }
        }
        catch(error) {
            console.log(error);
        }
    }
};