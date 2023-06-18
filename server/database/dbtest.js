var createDB = require('./createDatabase');
var database = require('./database');



createDB.createDatabase();

const username = "OLD_GUY";
const password = "sdfdasdfads";
const email = "test2@email.com";

database.createUser(username, password, email);




