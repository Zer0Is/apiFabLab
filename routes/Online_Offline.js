var express = require('express');
var router = express.Router();
const requestify = require('requestify');

router.get('/:online', async (req, res) => {
    var url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/printer-report';
    var online = req.params.online
    var arr = []

    var resultado = await requestify.get(url).then((response) =>{
        return response.getBody().Items;
    });

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

    return res.json({result: arr});

});

module.exports = router;