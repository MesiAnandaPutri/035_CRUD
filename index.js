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


// CREATE (POST)
app.post('/api/users', (req, res) => {
    const { Nama, Nim, Kelas } = req.body;

    if (!Nama || !Nim || !Kelas) {
        return res.status(400).json({ message: 'Nama, NIM, dan kelas harus diisi' });
    }

    db.query(
        'INSERT INTO Mahasiswa (Nama, Nim, Kelas) VALUES (?, ?, ?)',
        [Nama, Nim, Kelas],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Database error' });
            }
            res.status(201).json({ message: 'Data berhasil ditambahkan' });
        }
    );
});


// UPDATE (PUT)
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { Name, Nim, Kelas } = req.body;

    db.query(
        'UPDATE Mahasiswa SET nama = ?, nim = ?, kelas = ? WHERE id = ?',
        [Name, Nim, Kelas, userId],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Database error' });
            }
            res.json({ message: 'Data berhasil diperbarui' });
        }
    );
});
