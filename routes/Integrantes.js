var express = require('express');
var router = express.Router();
const requestify = require('requestify');

router.get('/:workgroup_name', async (req, res) => {
    var url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/org-user-list-report';
    var work_group = req.params.workgroup_name
    var arr = []

    var resultado = await requestify.get(url).then((response) =>{
        return response.getBody().Items;
    });

    for (let i=0;i<resultado.length;i++){
      const element = resultado[i];
      if (element.workgroup_name == work_group){
        var correo = element.account ;
        arr.push(correo);
      }
    }

    return res.json({result: arr});

});

module.exports = router;