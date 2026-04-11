let express = require('express');
let app = express();
let port = 4000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
 res.send("hello world")
});

app.listen(port, () => console.log('Example app listening on port 4000!'));