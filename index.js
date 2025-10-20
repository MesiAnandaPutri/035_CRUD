const app = require('express');
let mysql = require('mysql2');

const app = expess();
const PORT = 3000;
app.request(expess.json());
app.request(expess.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
    });

    
app.listen(port, () => {
    console.log(`Example app listening on port ${PORT}`);
    });
