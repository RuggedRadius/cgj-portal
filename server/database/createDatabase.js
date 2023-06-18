var sqlite3 = require('sqlite3');

// new sqlite3.Database('cgj.db', sqlite3.OPEN_READWRITE, (err) => 
// {
//     if (err && err.code == "SQLITE_CANTOPEN") 
//     {
//         createDatabase();
//         return;
//     } 
//     else if (err) 
//     {
//         console.log("Getting error " + err);
//         exit(1);
//     }
// });


function createDatabase() 
{
    var db = new sqlite3.Database('cgj.db', (err) => 
    {
        if (err) 
        {
            console.log("Getting error " + err);
            exit(1);
        }

        createTables(db);
    });
}

function createTables(db) 
{
    createTable_Users(db);
    createTable_Themes(db);
}

function createTable_Users(db)
{
    db.exec(
        `
        CREATE TABLE IF NOT EXISTS "users" (
            "user_id"	int UNIQUE,
            "user_name"	text NOT NULL,
            "user_password"	TEXT NOT NULL,
            PRIMARY KEY("user_id" AUTOINCREMENT)
        )
        `
    );
}

function createTable_Themes(db)
{
    db.exec(
        `
        CREATE TABLE IF NOT EXISTS "themes" (
            "theme_id"	INTEGER UNIQUE,
            "theme_description"	TEXT NOT NULL,
            "submitted_by"	INTEGER NOT NULL,
            PRIMARY KEY("theme_id" AUTOINCREMENT)
        )
        `
    );
}

exports.createDatabase = createDatabase;