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

    
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ' SandiMySQL24',
    database: 'biodata',
    port: 3307
    });


db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    }
    console.log('Connected successfully to MySQL.');
});

// Route dasar
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// READ (GET)
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM Mahasiswa', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send('Error fetching users');
        }
        res.json(results);
    });
});
