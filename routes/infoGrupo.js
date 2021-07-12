var express = require('express');
var router = express.Router();
const requestify = require('requestify');

//Dado un alumno en un grupo, retorna todos los compañeros
router.get('/:user', async (req, res) => {
    var url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/org-user-list-report';
    var user = req.params.user;
    var workgroup_id = '';
    var arr = [];
  
    var resultado = await requestify.get(url).then((response) =>{
        return response.getBody();
    });

    for (let i=0;i < resultado.Count; i++){
      const element = resultado.Items[i];
      if (user == element.account){
        workgroup_id = element.workgroup_id;
      }
    }

    //no tiene grupo asociado
    if(workgroup_id == ''){
        return res.json({response : 0});
    }

    for (let i=0;i < resultado.Count; i++){
        const element = resultado.Items[i];
        if (workgroup_id == element.workgroup_id){
          arr.push(element.account);
        }
    }

    url = 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/billing-report';
    
    var har = [];
    resultado = await requestify.get(url).then((response) =>{
        return response.getBody();
    });
    for (let i=0; i< resultado.Count; i++){
        const element = resultado.Items[i];
        if (arr.includes(element.account)){
            har.push(element);
        }
    } 
    return res.json(har);

});

module.exports = router;