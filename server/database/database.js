const dbPath = 'cgj.db';
const sqlite3 = require('sqlite3').verbose();

function createUser(username, password, email)
{
    // Open the database connection
    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => 
    {
        if (err) 
        {
            console.error(err.message);
            return;
        }

        const insertQuery = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
        const values = [username, password, email];

        db.run(insertQuery, values, function(err) 
        {
            if (err) 
            {
                console.error(err.message);
                return;
            }

            console.log(`A new record with ID ${this.lastID} has been inserted into the users table.`);
        });

        // Close the database connection
        db.close((err) => 
        {
            if (err) 
            {
                console.error(err.message);
                return;
            }
        });
    });
}

function getAllUsers() 
{
    console.log("QUERYING DATABASE FOR ALL USERS");
    return new Promise(function(resolve, reject) 
    {
        const dbPath = 'cgj.db';
        const db = new sqlite3.Database(dbPath);
        const query = 'SELECT * FROM users';

        db.all(query, (err, rows) => 
        {
          if (err) 
          {
              console.error(err.message);
              reject(err); // Reject the promise with the error
              return;
          }

            console.log("RESOLVING:", rows);
            resolve(rows); // Resolve the promise with the query result
        });

        db.close();
    });
}

function login(username, password)
{
  
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;