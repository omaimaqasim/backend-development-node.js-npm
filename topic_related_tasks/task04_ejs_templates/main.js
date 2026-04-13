let express = require('express');
let app = express();
let port = 4000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
 let brand_name = "dior";
 let  brand_des = "dior the famous brand";
//if both variable name and key name is same then just write one time js automatically understand
 res.render('navbar',{brand_name:brand_name,brand_des:brand_des})

});

app.get('/:brand/:des', (req, res) => {
 let brand_name = req.params.brand;
 let  brand_des = req.params.des;
//if both variable name and key name is same then just write one time js automatically understand
 res.render('navbar',{brand_name,brand_des})

});

app.get('/index', (req, res) => {
 let brand_name = "dior";
 let  brand_des = "dior the famous brand";
//if both variable name and key name is same then just write one time js automatically understand
 res.render('index',{brand_name:brand_name,brand_des:brand_des})

});


app.listen(port, () => console.log('Example app listening on port 4000!'));