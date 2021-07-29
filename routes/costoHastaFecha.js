var express = require('express');
var router = express.Router();
const requestify = require('requestify');

//Costo entre fechas
router.get('/:fechaInicio/:fechaFin', async (req, res) => {
    var url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/billing-report';
    var fechaInicio = req.params.fechaInicio;
    var fechaFin = req.params.fechaFin;
    var costoTotal = 0;

    var resultado = await requestify.get(url).then((response) =>{
        return response.getBody().Items;
    });

    for (let i=0;i < resultado.length; i++){
      const element = resultado[i];
      if ((element.year_month >= fechaInicio && element.year_month <= fechaFin)  && element.material_cost !== ''){
        costoTotal += parseFloat(element.material_cost);
      }
    }

    return res.json({result: costoTotal});

});

module.exports = router;
