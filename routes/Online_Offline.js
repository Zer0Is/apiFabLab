var express = require('express');
var router = express.Router();
const requestify = require('requestify');

router.get('/:online', async (req, res) => {
    var url = 'https://prueba2test.herokuapp.com/get/maker';
    var online = req.params.online;
    var arr = [];

    var resultado = await requestify.post(url, {id : 1}).then((response) =>{
        return response.getBody();
    });
    /*
    for (let i=0;i<resultado.length;i++){
      const element = resultado[i];
      if (element.online_offline == online){

        var id = element.printer_id ;
        var nombre = element.printer_name ;
        arr.push({
            ID : id,
            name : nombre
        })
      }
    }
    */

    return res.json(resultado);

});

module.exports = router;