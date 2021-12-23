const express = require('express');
//Thực thi funciton expression và return về object 
const app = express();

const port = 3000;

//route
app.get('/', (req, res) => res.send('Hello World !'));
app.get('/tin-tuc', (req, res) => res.send('Tin tuc !'));

//127.0.0.1 ánh xạ với localhost
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));



