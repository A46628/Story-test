/*
user = [{
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
]


Orders = [
    {
        id_User:1,
        id_Order:1,
        order_Date :"28/10/2024",
   
    },

    {
        id_User:2,
        id_Order:1,
        order_Date :"28/10/2024",
   
    },
    {
        id_User:3,
        id_Order:1,
        order_Date :"28/10/2024",
   
    }

]


Product = [
    {
    id_Product :"1",
    name_Product : "Maça",
    description_Of_Product :" Maça para comer ",
    amount_Product :" 10",
    price_Product : "2EUR",
    country_of_manufacture : "Portugal",
    expiration_Date : "28/10/2026",
    id_Order:1,

},
{
    id_Product :"1",
    name_Product : "Maça",
    description_Of_Product :" Maça para comer ",
    amount_Product :" 10",
    price_Product : "2EUR",
    country_of_manufacture : "Portugal",
    expiration_Date : "28/10/2026",
    id_Order:1,


}]

/*
Stated_Paymment : [{
    id_user,
    id_order,
    paymentDate,
    typePayment // Dinheiro ou cartão
}]
*/
/*
AddresClient =[{
    nifClient,
    road,
    city,
    numberDoor,
    numberFloor
}]
*/


/*
orderDelevery:{
    datePaymment,
    id_Order,
    id_User,
    cityDelevery

}
*/



const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});

connection
  .then(conn => {
    
    return conn.query(`INSERT INTO Customer (Id, name, NIF, email, password, phone_number) VALUES ('1', 'Paulo Tavares', '296884391', 'pvitorn18@gmail.com', 'paulo120', '927678232')`);
  })
  .then(result => {
    console.log(result);
    return connection.end();
  })
  .catch(err => {
    console.log(err);
    return connection.end();
  });

