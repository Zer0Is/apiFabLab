var express = require('express');
var router = express.Router();
const requestify = require('requestify');


router.get('/', async (req, res) => {
    //obtner cantidad de grupos e individuos
    var url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/org-user-list-report';
    var costoIndividuoGrupo = {
        costoTotalGrupos: 0,
        costoTotalIndividuos: 0

    };
    var id_individuos = [];

    var resultado = await requestify.get(url).then((response) =>{
        return response.getBody();
    });

    for (let i=0;i < resultado.Count; i++){
      const element = resultado.Items[i];
      if (element.workgroup_id == ''){    
        id_individuos.push(element.account);
      }
    }

    url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/workgroup-report';

    resultado = await requestify.get(url).then((response) =>{
        return response.getBody();
    });

    for (let i=0;i < resultado.Count; i++){
        element = resultado.Items[i];
        costoIndividuoGrupo.costoTotalGrupos += parseFloat(element.material_cost);
    }

    url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/audit-report';

    resultado = await requestify.get(url).then((response) =>{
        return response.getBody();
    });

    for (let i=0;i < resultado.Count; i++){
        element = resultado.Items[i];

        if (element.material_cost !== '' && id_individuos.includes(element.email)){
            costoIndividuoGrupo.costoTotalIndividuos += parseFloat(element.material_cost);
          }
    }

    return res.json(costoIndividuoGrupo);

});

module.exports = router;