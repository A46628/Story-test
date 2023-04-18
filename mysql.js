/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '1234', {
    host: 'localhost',  
    dialect:'mysql'
})


// verify connection 
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
})

*/

var mysql = require('mysql2');

var connection = mysql.createConnection({   
    host: 'localhost',  
    user: 'root',  
    password: '1234',  
    database: 'test'
})

connection.connect(function(err) {
    if(!!err){
        console.error('Unable to connect to the database:', err);
    }else{
        console.log('Connection has been established successfully.');
    }
})

/*
{
    Nif :"296884391",
    Email :"pvitorn18@gmail.com",
    password : "paulo120",
    name :"Paulo Tavares",
    Number_Phone : "927678232",
    token: "adnejfbenlfnbjrefn",
    id_User:1
},
{
    Nif :"987654321",
    Email :"sofia18@gmail.com",
    password : "sofia",
    name :"carla",
    Number_Phone : "927678232", // unique fields 
    token:"fnejfnefnefienf",
    id_User:2
   
},
{
    Nif :"123456789",
    Email :"carla@gmail.com",
    password : "carla",
    name :"carla",
    Number_Phone : "927678232", // unique fields 
    token:"mkmkfefmefeflmblf",
    id_User:3
   
}

*/
connection.query(`
 INSERT INTO Customer (Id, name, NIF, email, password,phone_number) VALUES ('1','296884391',
 'pvitorn18@gmail.com','paulo120','Paulo Tavares',927678232);
`, function(err, results, fields) {
  if (err) throw err;
  console.log('Table created successfully!');
});

