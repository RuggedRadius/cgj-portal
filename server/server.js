const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const session = require('express-session');
const app = express();

const db = new sqlite3.Database('./database/cgj.db');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle the client request for the root URL
app.get('/', (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Define a route to handle the client request
app.get('/getAllUsers', (req, res) => 
{
  db.all('SELECT * FROM users', (err, rows) => 
  {
    if (err) 
    {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(rows);
  });
});

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Route to handle user registration form submission
app.post('/register', (req, res) => 
{
  const { username, email, password } = req.body;

  // Perform the database insertion
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.run(query, [username, email, password], function (err) 
  {
    if (err) 
    {
      console.error(err.message);
      res.status(500).end();
      return;
    }

    res.status(204).end();
  });
});

app.post('/login', (req, res) => 
{
    const { username, password } = req.body;
  
    // Query the database to retrieve the user's password
    const query = 'SELECT password FROM users WHERE username = ?';
    db.get(query, [username], (err, row) => 
    {
        if (err) 
        {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // Check if the user exists and the password matches
        if (row && row.password === password) 
        {
            console.log(`User [${username}] has logged in.`);

            req.session.username = username;

            res.status(200).json({ message: 'Login successful' });
        } 
        else 
        {
            console.log("ERROR: Invalid username or password.");

            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
});

app.post('/logout', (req, res) => 
{
    const username = req.session.username;
    
    req.session.username = null;

    console.log(`User [${username}] has logged out.`);

    res.status(200).json({ message: 'Logout successful' });
});



// Start the server
app.listen(port, () => 
{
  console.log(`Server is listening on port ${port}`);
});